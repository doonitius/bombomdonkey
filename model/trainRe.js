const mongoose = require('mongoose');

const trainReschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    TrainID : {
        type : String,
        required : true
    },
    startDate : {
        type: Date,
        required : true
    },
    endDate : {
        type: Date,
        required : true
    }
})

module.exports = mongoose.model('trainRe', trainReschema);