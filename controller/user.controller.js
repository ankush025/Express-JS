const users = require('../Public/user.json');




// CRUD



// Create => POST Method
exports.createUser = (req,res) => {
    users.push(req.body);
    res.status(201).json({message : 'New User is Added...!!!'});
};


// READ => Get Method (ALL Users)
exports.getAllUser = (req,res) => {
    res.status(200).json(users);
};


// READ => GET Method (Single)
exports.getUser = (req,res) => {
    const id1 = req.params.id;
    const item1 = users.find((e) => e.id === +id1)
    res.status(200).json(item1);
};


// Replace => PUT Method
exports.replaceUser = (req,res) => {
    const id1 = req.params.id;
    const itemIndex1 = users.findIndex((e)=> e.id === +id1);

    users.splice(itemIndex1 , 1 , {...req.body})
    res.status(200).json({message : 'User is Replaced...!!!'});
};


// Update => PATCH Method
exports.updateUser = (req,res) => {
    const id1 = req.params.id;
    const itemIndex1 = users.findIndex((e)=> e.id === +id1)
    const user = users[itemIndex1];

    users.splice(itemIndex1 , 1 , {...user, ...req.body});
    res.status(200).json({message : 'User is Upadated...!!!'});
};


// Delete => DELETE Method
exports.deleteUser = (req,res) => {
    const id1 = req.params.id;
    const itemIndex1 = users.findIndex((e)=> e.id === +id1)
    // const user = users[itemIndex1];

    users.splice(itemIndex1 , 1 );
    res.status(200).json({message : 'User is Deleted...!!!'});
};
