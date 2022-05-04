const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blockSchema = new Schema({
    id: {type: Number, require: true, unique: true},
    name: {type: String},
    price: {type: String}
}, {
    versionKey: false
});

module.exports = mongoose.model('blocks', blockSchema);
