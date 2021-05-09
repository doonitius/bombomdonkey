const mongoose = require('mongoose');

const Projectschema = mongoose.Schema({
    ProjectID : {
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
    },
    Status : {
        type: Number,
        required : true
    },
    StartDate : {
        type: Date,
        required : true
    },
    DueDate : {
        type: Date,
        required : true
    },
    ProfitRatio : {
        type: Number,
        required : true
    },
    pManager : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('Project', Projectschema);