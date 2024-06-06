// Cart
const express = require("express");
const mongoose = require("mongoose");             // Mongoose require
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

server.listen(9000,()=> {
    console.log('Server Start......');
});