const mongoose = require('mongoose');

const Branchschema = mongoose.Schema({
    BranchID : {
        type : String,
        required : true
    },
    telBranch : {
        type : String,
        required : true
    },
    Address : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('Branch', Branchschema);