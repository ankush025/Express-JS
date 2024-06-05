const express = require("express");
const cartRoutes = express.Router();

const {
    addNewCart
} = require('../controller/cart.controller');

const veriftToken = require("../helpers/verifyToken");



cartRoutes.post("/add-cart", veriftToken, addNewCart);


module.exports = cartRoutes;