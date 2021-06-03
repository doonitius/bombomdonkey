const Behavior = require('../model/BehaviorRe');
const express = require('express');
const router = express.Router();
const Employee =  require('../model/EmployeeInfo'); 

exports.add = async (req, res) => {
    ///
    if (!req.body) {
        return res.status(400).send({message: "Have to have all data"});
    }
    //
    const id = await Employee.findOne({ EmployeeID: req.body.employeeID });
    const behavior = new Behavior({
        EmployeeID: req.body.employeeID,
        Date: req.body.behavedate,
        Detail: req.body.detail
    });
    if(!id) {
        return res.status(404).send({message: "EmployeeID not found!"});
    }
    try {
        const savedBehavior = await behavior.save();
    } catch (err) {
        res.status(400).send({message: "error" })
    }
}

exports.view = async (req, res) => {
    const foundemployee = await behavior.find({ EmployeeID: req.body.employeeID})
    if(foundemployee){
        res.json(foundemployee);
    }
    else{
        res.send({message: "No behavior record"})
    }
}

