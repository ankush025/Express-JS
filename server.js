const express = require("express");
const server = express();
const morgan = require('morgan');
const path = require('path');
const filepath = path.join(__dirname,'Public');




// MiddleWare


let auth = (req,res,next) => {
    // console.log(req.query);           // { name: 'ankush', age: '18', surname: 'Thummar' }

    // if(req.query.age >= 18){
    //     next();
    // }else{
    //     res.send('Sorry,your age Smallest ....!!!!');
    // }



    // console.log(req.body);
    // if(req.body.age >= 18){
    //         next();
    //     }else{
    //         res.send('Sorry,your age Smallest ....!!!!');
    //     }


    if(req.body){
        next();
    }
    
}


// server.use(auth);                                 // Application Level
server.use(express.static(filepath));                // Express Statis
server.use(express.json());                          // Express JSON
server.use(express.urlencoded({extended:true}));     // Express urlencoded 




server.get("/", auth ,(req,res)=>{                       
    res.send("Hello");
})

server.get("/data", auth ,(req,res)=>{                       
    res.sendFile(`${filepath}/data.json`);
})

server.get("/1", auth ,(req,res)=>{                       
    res.send("Welcome to Express Server");
})







server.listen(1122,()=> {
    console.log('Server Start......');
});