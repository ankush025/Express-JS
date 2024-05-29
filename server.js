require('dotenv').config();
const express = require("express");
const server = express();
const morgan = require('morgan');                 // another HTTP request logger middleware
const mongoose = require("mongoose");             // Mongoose require
const port = process.env.PORT


// Database Connection 
mongoose
    .connect(process.env.MODEL_URL)
    .then(() => console.log("DB is Connected..."))
    .catch((error) => console.log(error));



server.use(express.json());
server.use(morgan('dev'));                       // logger


// Products

const productRoutes = require("./routes/product.routes");
server.use('/api/products',productRoutes);






// User

const userRoutes = require("./routes/user.routes");
server.use('/api/users',userRoutes);





server.listen(port,()=> {
    console.log('Server Start......');
});