const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currencySchema = new Schema({
    _id: {type: Number, required: true, unique: true},
    currency: {type: Number}
}, {
    _id: false,
    versionKey: false
});

module.exports = mongoose.model('currency', currencySchema);
