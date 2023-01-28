const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bestsellerSchema = new Schema({
    code: {type: String, require: true, unique: true},
    product: {type: String},
    price: {type: Number},
    unit: {type: String},
    comment: {type: String},
    count: {type: Number},
    available: {type: String},
    class: {type: String},
    category: {type: String},
    subcategory: {type: String},
    img: {type: String},
    id: {type: Number, require: true, unique: true}
}, {
    versionKey: false
});

module.exports = mongoose.model('bestsellers', bestsellerSchema);
