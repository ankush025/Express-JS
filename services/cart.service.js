const Cart = require("../model/cart.model");

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
};
