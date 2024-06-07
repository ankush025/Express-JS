const express = require("express");
const cartRoutes = express.Router();

const {
    addNewCart,
    getAllCarts
} = require('../controller/cart.controller');

const veriftToken = require("../helpers/verifyToken");



cartRoutes.post("/add-cart", veriftToken, addNewCart);
cartRoutes.get("/", veriftToken, getAllCarts);



module.exports = cartRoutes;