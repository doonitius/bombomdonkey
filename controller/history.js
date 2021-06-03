const express = require('express');
const eduHis = require('../model/EducationHistory');
const Employee =  require('../model/EmployeeInfo'); 
const workHis= require('../model/workHistory');

exports.add = async (req,res) => {
    const id = await Employee.findOne({ EmployeeID: req.body.employeeID });
    if(!id) {
        return res.status(404).send({message: "EmployeeID not found!"});
    }
    if (req.body.university) {
        const edu = new eduHis({
            EmployeeID: req.body.employeeID,
            // use multer package in post
            //TranscriptFile: req.body.,
            GPA: req.body.gpa,
            University: req.body.university,
            Faculty: req.body.faculty,
            Department: req.body.department
        });
        try {
            const savededu = await edu.save();
        } catch (err) {
            res.status(400).send({message: "error" })
        }
    } else {
        const work = new workHis({
            EmployeeID: req.body.employeeID,
            Company: req.body.company,
            position: req.body.position,
            ///////
            yearExp: req.body.year
        });
        try {
            const savework = await work.save();
        }
        catch (err) {
            res.status(400).send({message: "error" })
        }
    }

}