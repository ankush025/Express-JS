require('dotenv').config();
const express = require("express");
const server = express();
const morgan = require('morgan');                 // another HTTP request logger middleware
const mongoose = require("mongoose");             // Mongoose require
const port = process.env.PORT


// Database Connection 
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB is Connected..."))
    .catch((error) => console.log(error));



server.use(express.json());
server.use(morgan('dev'));                       // logger


// Products

const productRoutes = require("./routes/product.routes");
server.use('/api/products',productRoutes);






// User

const userRoutes = require("./routes/user.routes");
server.use("/api/users",userRoutes);

// const userRoutes = require("./routes/user_1.routes");
// server.use('/api/users',userRoutes);



// Cart

const session = require('express-session');
const passport = require('passport');

const cartRoutes = require('./routes/cart.routes');
server.use("/api/carts",cartRoutes);

function isLoggedIn(req,res,next){
    req.user ? next() : res.sendStatus(401);
}

server.get('/',(req,res)=>{
    res.sendFile('index.html');
});

server.use(session({
    secret: 'mysecret',
    resave: false,
    saveUnitialized: true,
    cookie: { secure: false}
}));

server.use(passport.initialize());
server.use(passport.session());

// Passport Google oauth-2
const auth = require('./passportJS');

server.get('/auth/google',
    passport.authenticate("google",{ scope:
        ['email','profile']
    })
);

server.get('/auth/google/callback',
    passport.authenticate('google',{
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
    })
);

server.get('/auth/google/failure',(req,res)=>{
    res.send("Something went wrong!");
})


server.get('/auth/protected',isLoggedIn,(req,res)=>{
    let name = req.user.displayName;
    res.send(`Hello $(name)`);
})

server.use('/auth/logout',(req,res)=>{
    req.session.destroy();
    res.send('See You Again...!!!')
})

server.listen(port,()=> {
    console.log('Server Start......');
});