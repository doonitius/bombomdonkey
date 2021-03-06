const mongoose = require('mongoose');

const Employeeschema = mongoose.Schema({
    EmployeeID: {
        type: String,
        require: true
    },
    PositionID: {
        type: String,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    Surname: {
        type: String,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    Birthdate: {
        type: Date,
        require: true
    },
    Religion: {
        type: String,
    },
    Nationality: {
        type: String,
        require: true
    },
    Tel: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    zip: {
        type: String,
        require: true
    },
    Hire: {
        type: Date,
        required: true
    },
    Email: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Employee', Employeeschema);