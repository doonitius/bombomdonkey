const mongoose = require('mongoose');

const DeductDeschema = mongoose.Schema({
    deductCode : {
        type : String,
        required : true
    },
    deductionDetail : {
        type : String,
        required : true
    },
    Amount : {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('DeductDe', DeductDeschema);