const express = require('express');
const Employee =  require('../model/EmployeeInfo');
const bonus = require('../model/BonusRe'); 

exports.add = async (req, res) => {
    // !!!!!
    if (!req.body) {
        console.log(req.body);
        return res.status(400).send({message: "Have to have all data"});
    }
    //
    //
    if (Object.keys(req.body).length === 0) {
        console.log(req.body);
        return res.status(400).send({message: "Have to have all data"});
    }
    //

    const id = await Employee.findOne({ EmployeeID: req.body.employeeID });
    const bon = new bonus({
        EmployeeID: req.body.employeeID,
        Date: req.body.bdate,
        Amount: req.body.amount
    });
    if(!id) {
        return res.status(404).send({message: "EmployeeID not found!"});
    }
    try {
        const savedbon = await bon.save();
    } catch (err) {
        res.send({message: "error" })
    }
}