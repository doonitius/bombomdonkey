const mongoose = require('mongoose');

const viewschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    PositionID : {
        type : String,
        required : true
    },
    minSalary : {
        type: Number,
        required : true
    },
    maxSalary : {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('View', viewschema);