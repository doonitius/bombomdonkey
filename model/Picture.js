const mongoose = require('mongoose');

const EmpPic = mongoose.Schema({
    EmployeeID: {
        type: String,
        required: true
    },
    Picture: {
        data = Buffer,
        type = String
    }
})

module.exports = mongoose.model('Pic', Picschema);