const WorkRec = require('../model/WorkRe');
const express = require('express');

exports.add = async (req, res, next) => {

    const existId = await Employee.findOne({ EmployeeID: req.body.employeeID });
    const Workrecord = new WorkRec({
        EmployeeID: req.body.employeeid,
        ProjectID: req.body.projectid,
        EmployeeStartDate: req.body.employeeStartdate,
        EmployeeEndDate: req.body.employeeEnddate
    });
    if(!existId) {
        return res.status(404).send({message: "EmployeeID not found!"});
    }
    try{
        const savedworkrecord = await Workrecord.save();
        res.json(savedworkrecord);
    }catch(err){
        res.status(400).send({message: "error"})
    }
}