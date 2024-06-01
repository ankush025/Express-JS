const express = require("express");
const userRoutes = express.Router();

const { 
    registerUser,
    loginUser,
    getProfile,
    } = require("../controller/user.controller");

const veriftToken = require("../helpers/verifyToken");




userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

userRoutes.get("/profile",veriftToken, getProfile);

module.exports = userRoutes;
