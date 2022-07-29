const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema definition - ODM - Object Document Mapping

const orderSchema = new Schema({
    id:{type:Number,required:true},
    customerId:String,
    productName:String,
    quantity:Number,
    unitPrice:Number,
    lineTotal:Number

})
const orders = mongoose.model('order',orderSchema);
module.exports = orders;