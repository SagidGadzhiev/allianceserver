const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema({
    code: {type: String, require: true, unique: true},
    product: {type: String},
    price: {type: Number},
    unit: {type: String},
    comment: {type: String},
    count: {type: Number},
    category: {type: String},
    img: {type: String},
    id: {type: Number, require: true, unique: true}
}, {
    versionKey: false
});

module.exports = mongoose.model('products', itemSchema);
