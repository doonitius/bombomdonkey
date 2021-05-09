const mongoose = require('mongoose');

const Educationschema = mongoose.Schema({
    EmployeeID : {
        type : String,
        required : true
    },
    TranscriptFile : {
        type : Undefined,     /////////????????
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