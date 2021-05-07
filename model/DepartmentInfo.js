const mongoose = require('mongoose');

const Departmentschema = mongoose.Schema({
    DepartmentID : {
        type : String,
        required : true
    },
    BranchID : {
        type : String,
        required : true
    },
    Name : {
        type: String,
        required : true
    },
    ManagerID : {
        type: String,
    }
})

module.exports = mongoose.model('Department', Departmentschema);