const mongoose = require('mongoose');

const Employeeschema = mongoose.Schema({
    EmployeeID : {
        type: String,
        require: true
    },
    PositionID : {
        type: String,
        require: true 
    },
    Name : {
        type: String,
        require: true 
    },
    Surname : {
        type: String,
        require: true 
    },
    // which type
    Gender : {
        type: String,
        require: true 
    },
    Birthdate : {
        type: Date,
        default: new Date,
        require : true
    },
    Religion : {
        type: String,
        require: true 
    },
    Nationality : {
        type: String,
        require: true 
    },
    Tel : {
        type: Number,
        require: true 
    },
    Email : {
        type: String,
        require: true 
    },
    street: {
        type: String,
        require: true 
    },
    City : {
        type: String,
        require: true 
    },
    zip : {
        type: Number,
        require: true 
    },
    Hire : {
        type: Date,
        default: new Date,
        require: true 
    }
})

module.exports = mongoose.model('Employee', Employeeschema);