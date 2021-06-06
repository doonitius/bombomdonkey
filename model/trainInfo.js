const mongoose = require('mongoose');

const trainInfoschema = mongoose.Schema({
    TrainID : {
        type : String,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    Detail : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('trainInfo', trainInfoschema);