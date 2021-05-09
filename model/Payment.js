const mongoose = require('mongoose');

const Paymentschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    PaymentID : {
        type : String,
        required : true
    },
    Date : {
        type: Date,
        required : true
    },
    Tax : {
        type: Number,
        required : true
    },
    deduction: {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('payment', Paymentschema);