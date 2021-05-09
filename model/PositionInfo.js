const mongoose = require('mongoose');

const Positionschema = mongoose.Schema({
    PositionID : {
        type : String,
        required : true
    },
    DepartmentID : {
        type : String,
        required : true
    },
    Name : {
        type: String,
        required : true
    },
    minSalary : {
        type: Number,
        required : true
    },
    maxSalary : {
        type: Number,
        required : true
    },
    baseWorkHour : {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('Position', Positionschema);