const mongoose = require('mongoose');

const timeReschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    Date : {
        type : Date,
        required : true
    },
    Status : {
        type: String,
        required : true
    },
    workHour : {
        type: Number,
        required : true
    },
    Detail : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('timeRe', timeReschema);