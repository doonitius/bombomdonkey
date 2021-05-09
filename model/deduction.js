const mongoose = require('mongoose');

const Deductionschema = mongoose.Schema({
    PaymentID : {
        type : String,
        required : true
    },
    deductCode : {
        type : String,
        required : true
    },
    Number : {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('Deduction', Deductionschema);