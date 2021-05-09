const mongoose = require('mongoose');

const proHisschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    promoDate : {
        type : Date,
        required : true
    },
    PreviousPosition : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('proHis', proHisschema);