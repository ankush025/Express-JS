const express = require("express");
const server = express();
const morgan = require('morgan');                 // another HTTP request logger middleware

const products = require('./Public/product.json');
// console.log(products);


server.use(express.json());
server.use(morgan('dev'));                       // logger




// CRUD


// Create => POST Method
server.post('/products' , (req , res) => {
    // console.log(req.body);
    products.push(req.body);
    res.status(201).json({message: 'New Product is Added...!!!'});
});


// READ => GET Method (ALL Products)
server.get('/products' , (req,res) => {
    res.status(200).json(products);
});


// READ => GET Method (Single)
server.get('/product/:id',(req,res)=>{
    const id = +req.params.id;
    // console.log(typeof(id));
    const item = products.find((e)=> e.id === id)
    res.status(200).json(item);
})










server.listen(1122,()=> {
    console.log('Server Start......');
});