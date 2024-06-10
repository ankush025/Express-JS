const express = require('express');
const versionToken = require('../helpers/verifyToken');
const orderRoutes = express.Router();

const{
    createNewOrder,
    getAllOrder
} = require('../controller/order.controller');


orderRoutes.use(versionToken);
orderRoutes.post('/create', createNewOrder);
orderRoutes.get('/show', getAllOrder);


module.exports = orderRoutes;