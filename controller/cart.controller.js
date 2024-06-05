const CartServices = require('../services/cart.service');
const cartService = new CartServices();


exports.addNewCart = async (req, res) => {
    try {
        let results = await cartService.addNewCart(req.body, req.user._id);
        res.status(201).json(results);
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal Server Error "});
    }
};