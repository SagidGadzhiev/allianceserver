const mongoose = require('mongoose');


function connectToDB() {
    return mongoose.connect('mongodb+srv://admin:admin@cluster0.1bbr5.mongodb.net/allianceplus', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

module.exports = connectToDB;
