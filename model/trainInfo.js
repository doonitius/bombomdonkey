const mongoose = require('mongoose');

const trainInfoschema = mongoose.Schema({
    TrainID : {
        type : String,
        required : true
    },
    Nmae : {
        type : String,
        required : true
    },
    Detail : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('trainInfo', trainInfoschema);