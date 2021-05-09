const mongoose = require('mongoose');

const BehaviorReschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    Date : {
        type : Date,
        required : true
    },
    Detail : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('BehaviorRe', BehaviorReschema);