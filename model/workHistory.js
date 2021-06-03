const mongoose = require('mongoose');

const workHistoryschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    Company : {
        type : String,
        required : true
    },
    position : {
        type: String,
        required : true
    },
    yearExp : {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('workHistory', workHistoryschema);