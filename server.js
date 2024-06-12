require('dotenv').config();
const express = require("express");
const server = express();
const morgan = require('morgan');                 // another HTTP request logger middleware
const mongoose = require("mongoose");             // Mongoose require
const port = process.env.PORT

const path = require('path');
const filePath = path.join(__dirname, 'public/image');


// Database Connection 
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB is Connected..."))
    .catch((error) => console.log(error));



server.use(express.json());
server.use(morgan('dev'));                       // logger

server.use('/public/image', express.static(filePath));


// Products

const productRoutes = require("./routes/product.routes");
server.use('/api/products',productRoutes);






// User

const userRoutes = require("./routes/user.routes");
server.use("/api/users",userRoutes);

// const userRoutes = require("./routes/user_1.routes");
// server.use('/api/users',userRoutes);




// Cart

const cartRoutes = require('./routes/cart.routes');
server.use("/api/carts",cartRoutes);


// Order

const orderRoutes = require('./routes/order.routes');
server.use("/api/orders",orderRoutes);



server.listen(port,()=> {
    console.log('Server Start......');
});