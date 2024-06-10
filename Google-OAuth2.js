// Google OAuth2

const express = require("express");
const path = require('path');
const app = express();
require('./passportJS')
const session = require('express-session');
const passport = require('passport');

app.use(express.static(path.join(__dirname,'client')));

function isLoggedIn(req,res,next){
    req.user ? next() : res.sendStatus(401);
}

app.get('/',(req,res)=>{
    res.sendFile('index.html');
});

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUnitialized: true,
    cookie: { secure: false}
}));

app.use(passport.initialize()); 
app.use(passport.session());

// Passport Google oauth-2
const auth = require('./passportJS');

app.get('/auth/google',
    passport.authenticate("google",{ scope:
        ['email','profile']
    })
);

app.get('/auth/google/callback',
    passport.authenticate('google',{
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
    })
);

app.get('/auth/google/failure',(req,res)=>{
    res.send("Something went wrong!");
})


app.get('/auth/protected',isLoggedIn,(req,res)=>{
    let name = req.user.displayName;
    res.send(`Hello ${name}`);
})

app.use('/auth/logout',(req,res)=>{
    req.session.destroy();
    res.send('See You Again...!!!')
})

app.listen(5000,()=> {
    console.log('Server Start......');
});