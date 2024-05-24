const express = require("express");
const server = express();
const morgan = require('morgan');                 // another HTTP request logger middleware
const productRoutes = require("./routes/product.routes");

// console.log(products);


server.use(express.json());
server.use(morgan('dev'));                       // logger




server.use('/api/products',productRoutes);







server.listen(1122,()=> {
    console.log('Server Start......');
});