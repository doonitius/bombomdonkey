const mongoose = require('mongoose');

const workReschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    ProjectID : {
        type : String,
        required : true
    },
    EmployeeStartDate : {
        type: Date,
        required : true
    },
    EmployeeEndDate : {
        type: Date,
        required : true
    }
})

module.exports = mongoose.model('workRe', workReschema);