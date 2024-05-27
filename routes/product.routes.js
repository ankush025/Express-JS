const express = require("express");
const productRoutes = express.Router();

const{
    createProduct,
    getAllProduct,
    getProduct,
    // replaceProduct,
    // updateProduct,
    // deleteProduct 
} = require("../controller/product.controller")




// CRUD


// Create => POST Method
productRoutes.post('/',createProduct);


// READ => GET Method (ALL Products)
productRoutes.get('/',getAllProduct );


// READ => GET Method (Single)
productRoutes.get('/:id',getProduct);


// // Replace => PUT Method
// productRoutes.put('/:id',replaceProduct);


// // Update => PATCH Method
// productRoutes.patch('/:id',updateProduct);


// // Delete => DELETE Method
// productRoutes.delete('/:id',deleteProduct);


module.exports = productRoutes;