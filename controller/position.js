const express = require('express');
const Department = require('../model/DepartmentInfo');
const position = require('../model/PositionInfo');

exports.add = async (req, res) => {
    const id = await Department.findOne({DepartmentID: req.body.departmentID});
    if(!id) {
        return res.status(404).send({message: "DepartmentID not found!"});
    }
    const posiid = await position.findOne({PositionID: req.body.positionID});
    if(posiid){
        return res.status(400).send({message: "positionID already exist"});
    }
    const posi = new position({
        PositionID: req.body.positionID,
        DepartmentID: req.body.departmentID,
        Name: req.body.posT,
        minSalary: req.body.minSalary,
        maxSalary: req.body.maxSalary,
        baseWorkHour: req.body.bWorkHour
    })
    try {
        const savedPosi = await posi.save();
        res.status(200).send(posi.PositionID)
    } catch (err) {
        res.status(400).send(err.message)
    }
}