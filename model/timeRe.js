const mongoose = require('mongoose');

const timeReschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    Date : {
        type : Number,
        required : true
    },
    Status : {
        type: Boolean,
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