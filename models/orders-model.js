const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    shopping: {type: Array},
    date: {type: String},
    orderNumber: {type: Number, require: true, unique: true},
    buyer: {type: String},
    phone: {type: String},
    address: {type: String},
    email: {type: String},
    payment: {type: String},
    shipping: {type: String},
    note: {type: String}
}, {
    versionKey: false
});

module.exports = mongoose.model('orders', orderSchema);