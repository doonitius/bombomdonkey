const timereco = require('../model/timeRe');
const express = require('express');
const Employee = require('../model/EmployeeInfo');

exports.add = async (req, res, next) => {

    const existId = await Employee.findOne({ EmployeeID: req.body.employeeID });
    if(!existId) {
        return res.status(404).send({message: "EmployeeID not found!"});
    }
    const timerecord = new timereco({
        EmployeeID: req.body.employeeID,
        Date: req.body.date,
        Status: req.body.status,
        workHour: req.body.workHour,
        Detail: req.body.detail
    });
    try{
        const savedtimerecord = await timerecord.save();
        res.json(savedtimerecord);
    }catch(err){
        console.log(timerecord)
        res.status(400).send({message: "error"})
    }
}