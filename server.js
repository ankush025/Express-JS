const express = require("express");
const server = express();
const morgan = require('morgan');                 // another HTTP request logger middleware



// Products

const productRoutes = require("./routes/product.routes");

server.use(express.json());
server.use(morgan('dev'));                       // logger

server.use('/api/products',productRoutes);






// User

const userRoutes = require("./routes/user.routes");

server.use('/api/users',userRoutes);





server.listen(1122,()=> {
    console.log('Server Start......');
});