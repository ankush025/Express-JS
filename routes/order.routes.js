const express = require('express');
const verifyToken = require('../helpers/verifyToken');
const orderRoutes = express.Router();

const{
    createNewOrder,
    getAllOrder,
    removeOrder
} = require('../controller/order.controller');


orderRoutes.use(verifyToken);
orderRoutes.post('/create', createNewOrder);
orderRoutes.get('/show', getAllOrder);
orderRoutes.delete('/remove', removeOrder);


module.exports = orderRoutes;