const Order = require('../models/orderModel');

module.exports = {
    async getAllOrders(ctx){
        const orders = await Order.find({});
        ctx.body = orders;
    }
}