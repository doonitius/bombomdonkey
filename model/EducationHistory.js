const mongoose = require('mongoose');

const Educationschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    // use multer package in post
    TranscriptFile : {
        data : Buffer,
        type : String,     /////////????????
        required : true
    },
    GPA : {
        type: Number,
        required : true
    },
    University : {
        type: String,
        required : true
    },
    Faculty : {
        type: String,
        required : true
    },
    Department : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('Education', Educationschema);