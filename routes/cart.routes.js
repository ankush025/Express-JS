const express = require("express");
const cartRoutes = express.Router();

const {
    addNewCart,
    getAllCarts,
    updateCart,
    removeCart
} = require('../controller/cart.controller');

const veriftToken = require("../helpers/verifyToken");



cartRoutes.post("/add-cart", veriftToken, addNewCart);
cartRoutes.get("/", veriftToken, getAllCarts);
cartRoutes.put("/update", veriftToken, updateCart);
cartRoutes.delete("/remove", veriftToken, removeCart);




module.exports = cartRoutes;