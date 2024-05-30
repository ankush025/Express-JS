const express = require("express");
const userRoutes = express.Router();

const{
    createUser,
    getAllUser,
    getUser,
    replaceUser,
    updateUser,
    deleteUser
} = require("../controller/user_1.controller")




// Create
userRoutes.post('/',createUser);


// Read All
userRoutes.get('/',getAllUser);


// Read Single
userRoutes.get('/:id',getUser);


// Replace
userRoutes.put('/:id',replaceUser);


// Update
userRoutes.patch('/:id',updateUser);


// Delete
userRoutes.delete('/:id',deleteUser);


module.exports = userRoutes;