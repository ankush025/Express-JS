// const http = require('http');
// const server = http.createServer().listen(1234);    // create Server


const express = require("express");
const server = express();

server.get("/",(req,res)=>{                       // Data Get
    res.send("Welcome to Express Server");
})

server.get("/hello",(req,res)=>{
    res.send("<h1>Hello</h1>");
})



server.listen(1122,()=> {
    console.log('Server Start....');
});