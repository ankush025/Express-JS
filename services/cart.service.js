const { query } = require("express");
const { getAllCarts } = require("../controller/cart.controller");
const Cart = require("../model/cart.model");
const { default: mongoose } = require("mongoose");

module.exports = class CartServices {
  // Create Cart

  async addNewCart(body, userID) {
    try {
      let userCarts = await Cart.findOne({ user: userID });
      if (!userCarts) {
        return await Cart.create({
          user: userID,
          products: [
            {
              productId: body.productId,
              quantity: body.quantity || 1,
            },
          ],
        });
      } else {
        let findproductIndex = userCarts.products.findIndex(
          (item) => String(item.productId) === body.productId
        );
        if (findproductIndex !== -1) {
          userCarts.products[findproductIndex].quantity += body.quantity || 1;
        } else {
          userCarts.products.push({
            productId: body.productId,
            quantity: body.quantity || 1,
          });
        }
        return await userCarts.save();
      }
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  // Get All Carts

  async getAllCarts(query, userID) {
    try {
      let cartItem =
        query.cartId && query.cartId !== ""
          ? [
              {
                $match: { _id: new mongoose.Types.ObjectId(query.cartId) },
              },
            ]
          : [];
      let loginUser =
        query.me && query.me === "true"
          ? [
              {
                $match: { user: userID },
              },
            ]
          : [];
      let pipeline = [
        {
          $match: { isDelte: false },
        },
        ...loginUser,
        ...cartItem,
        {
          $lookup: {
            from: "users",
            localField: "user",
            foreignField: "_id",
            as: "user",
            pipeline: [
              {
                $project: {
                  firstName: 1,
                  lastName: 1,
                  email: 1,
                },
              },
            ],
          },
        },
        {
          $set: { user: { $first: "$user" } },
        },
        {
          $unwind: "$products",
        },
        {
          $lookup: {
            from: "products",
            localField: "product.productId",
            foreignField: "_id",
            as: "products.productId",
            pipeline: [
              {
                $project: {
                  title: 1,
                  price: 1,
                },
              },
            ],
          },
        },
        {
          $set: { "products.productId": { $first: "$products.productId" } },
        },
      ];

      let carts = await Cart.aggregate(pipeline);
      return carts;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }
};
