const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const saleProductSchema = new Schema({
    code: {type: String, unique: true, require: true},
    product: {type: String},
    class: {type: String},
    price: {type: Number},
    unit: {type: String},
    comment: {type: String},
    count: {type: Number},
    img: {type: String},
    category: {type: String},
    subcategory: {type: String},
    id: {type: Number, unique: true, require: true}
}, {
    versionKey: false
});

module.exports = mongoose.model('sales', saleProductSchema);
