const express = require('express');
const eduHis = require('../model/EducationHistory');
const Employee = require('../model/EmployeeInfo');
const workHis = require('../model/workHistory');

exports.addEdu = async(req, res) => {
    var i;
    for (i = 0; i < req.body.length; i++) {
        const id = await Employee.findOne({ EmployeeID: req.body[i].empID });
        if (!id) {
            return res.status(404).send({ message: "EmployeeID not found!" });
        }
        const edu = new eduHis({
            EmployeeID: req.body[i].empID,
            GPA: req.body[i].gpa,
            University: req.body[i].uni,
            Faculty: req.body[i].faculty,
            Department: req.body[i].department
        });
        try {
            const savededu = await edu.save();
            res.status(200).send({ message: "success" })
        } catch (err) {
            return res.status(400).send({ message: "error" })
        }
    }
}

exports.addWork = async(req, res) => {
    var i;
    for (i = 0; i < req.body.length; i++) {
        const id = await Employee.findOne({ EmployeeID: req.body[i].empID });
        if (!id) {
            return res.status(404).send({ message: "EmployeeID not found!" });
        }
        const work = new workHis({
            EmployeeID: req.body[i].empID,
            Company: req.body[i].company,
            position: req.body[i].position,
            yearExp: req.body[i].exp
        });
        try {
            const savedWork = await work.save();
            res.status(200).send({ message: "success" })
        } catch (err) {
            res.status(400).send({ message: "error" })
        }
    }
}

exports.viewEdu = async(req, res) => {
    const education = await eduHis.find({ EmployeeID: req.body.employeeID }, { "_id": 0, "__v": 0 });
    if (!education) {
        return res.status(404).send({ message: "Not have education history of this employee!" });
    }
    try {
        console.log(education);
        res.status(200).send({ education });
    } catch (err) { res.status(400).send(err); }
}

exports.viewWork = async(req, res) => {
    const work = await workHis.find({ EmployeeID: req.body.employeeID }, { "_id": 0, "__v": 0 });
    if (!work) {
        return res.status(404).send({ message: "Not have work history of this employee!" });
    }
    try {
        console.log(work);
        res.status(200).send({ work });
    } catch (err) { res.status(400).send(err); }
}