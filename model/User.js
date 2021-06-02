const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    EmployeeID : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    ROLE : {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('User', UserSchema);