const mongoose = require('mongoose');

const BonusReschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    Date : {
        type : Date,
        required : true
    },
    Amount : {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('BonusRe', BonusReschema);