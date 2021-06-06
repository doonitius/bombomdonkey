const Behavior = require('../model/BehaviorRe');
const express = require('express');
const Employee =  require('../model/EmployeeInfo'); 

exports.add = async (req, res) => {
    const id = await Employee.findOne({ EmployeeID: req.body.employeeID });
    if(!id) {
        return res.status(404).send({message: "EmployeeID not found!"});
    }
    const behavior = new Behavior({
        EmployeeID: req.body.employeeID,
        Date: req.body.behavedate,
        Detail: req.body.detail
    });
    try {
        const savedBehavior = await behavior.save();
        res.status(200).send({detail: behavior.Detail})
    } catch (err) {
        res.status(400).send({message: "error" })
    }
}

exports.viewAll = async (req, res) => {
    const foundemployee = await Behavior.find({},{"_id":0,"__v":0})
    if(foundemployee){
        console.log(foundemployee);
        res.send(foundemployee);
    }
    else if(err){
        res.send({message: "No behavior record"})
    }
}


