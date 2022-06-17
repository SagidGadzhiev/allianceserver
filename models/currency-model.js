const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currencySchema = new Schema({
    currency: { type: Number }
}, {
    versionKey: false
});

module.exports = mongoose.model('currency', currencySchema);
