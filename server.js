const express = require("express");
const server = express();
const morgan = require('morgan');




// MiddleWare

// server.use((req,res,next) => {
//     console.log(req.method,req.get('User -agent'));     // log
//     next();
// });

let auth = (req,res,next) => {
    // console.log(req.query);           // { name: 'ankush', age: '18', surname: 'Thummar' }

    // if(req.query.age >= 18){
    //     next();
    // }else{
    //     res.send('Sorry,your age Smallest ....!!!!');
    // }



    // console.log(req.body);
    if(req.body.age >= 18){
            next();
        }else{
            res.send('Sorry,your age Smallest ....!!!!');
        }
    
}


// server.use(auth);                                 // Application Level
server.use(express.json());                          // boody under row json data write
server.use(express.urlencoded({extended:true}));     // urlencoded 




server.get("/", auth ,(req,res)=>{                       
    res.send("Welcome to Express Server");
})

server.post("/", auth ,(req,res)=> {                    
    res.json({type: 'Post Methd'});
})
 
server.put("/",(req,res)=> {                    
    res.json({type: 'Put Methd'});
})

server.patch("/",(req,res)=> {               
    res.json({type: 'Patch Methd'});
})
 
server.delete("/",(req,res)=> {                
    res.json({type: 'Delete Methd'});
})





server.listen(1122,()=> {
    console.log('Server Start......');
});