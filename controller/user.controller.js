const User = require('../model/user.model');

exports.registerUser = async (req,res) => {
    try {
        const { firstName, lastName, email, password, mobileNo, profileImage, DOB, gender } = req.body;
        // Checking Already Register or Not 
        let user = await User.findOne({email : email , isDelete: false});
        console.log(user);
        if (user) {
            return res.json({message : 'You are Already Registered.....'})
        }
        user = await User.create({
            firstName, lastName, email, password, mobileNo, profileImage, DOB, gender
        });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}