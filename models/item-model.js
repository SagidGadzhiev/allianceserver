const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    code: {type: String},
    product: {type: String},
    price: {type: Number},
    unit: {type: String},
    comment: {type: String},
    count: {type: Number},
    category: {type: String},
    img: {type: String},
    id: {type: Number}
}, {
    versionKey: false
});

module.exports = mongoose.model('products', itemSchema);
