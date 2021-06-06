const express = require('express');
const Education = require('../model/EducationHistory');
const EmployeeInfo = require('../model/EmployeeInfo');
const Position = require('../model/PositionInfo');
const workhis = require('../model/workHistory');
var fs = require('fs');
var path = require('path');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

//post for add employee
exports.add = async(req, res) => {

    const validposition = await Position.findOne({ PositionID: req.body.positionID });
    const emp = await EmployeeInfo.findOne({ EmployeeID: req.body.employeeID })
    if (emp) {
        return res.status(400).send({ message: "EmployeeID already exist!" });
    }
    if (validposition) {
        const Employee = new EmployeeInfo({
            EmployeeID: req.body.employeeID,
            PositionID: req.body.positionID,
            Name: req.body.firstName,
            Surname: req.body.lastName,
            Gender: req.body.gender,
            Birthdate: req.body.birthDate,
            Religion: req.body.religion,
            Nationality: req.body.nation,
            street: req.body.street,
            City: req.body.city,
            Hire: req.body.joined,
            zip: req.body.zip,
            Email: req.body.email,
            Tel: req.body.tel,
        });
        try {
            const savedEmployee = await Employee.save();
            res.status(200).send(savedEmployee)
        } catch (err) {
            res.status(400).send({ message })
        }
    } else {
        res.status(404).send({ message: "Position does not exist" });
    }
}

exports.viewOne = async(req, res) => {
    const foundemployee = await EmployeeInfo.findOne({ EmployeeID: req.body.employeeID }, { "_id": 0, "__v": 0 });
    if (!foundemployee) {
        return res.status(404).send({ message: "Employee not found!" });
    }
    try {
        res.status(200).send(foundemployee);
    } catch (err) { res.status(400).send(err); }
}

exports.view = async(req, res) => {
    const employee = await EmployeeInfo.find({}, { "_id": 0, "__v": 0 });
    var i;
    var name = [];
    for (i = 0; i < employee.length; i++) {

        const posi = await Position.findOne({ PositionID: employee[i].PositionID });
        name[i] = posi.Name;
    }
    try {
        res.status(200).send({ employee, name });
    } catch (err) { res.status(400).send(err); }
}

exports.delete = async(req, res) => {
    var flag1 = false;
    var flag2 = false;
    const foundemployee = await { EmployeeID: req.body.employeeID }
    EmployeeInfo.findOneAndRemove(foundemployee, function(err) {
        if (err) {
            res.status(504).send({ message: err.message });
        } else {
            Education.deleteMany(foundemployee, function(err) {
                if (err) {
                    console.log("error edu");
                    res.status(504).send({ message: err.message });
                }
            });
            workhis.deleteMany(foundemployee, function(err) {
                if (err) {
                    console.log("error work")
                    res.status(504).send({ message: err.message });
                }
            })
            res.status(200).send({ message: "Thanos snaped employee" });
        }
    })

    console.log(req.body)
}


exports.edit = async(req, res) => {
    console.log(req.body)
    const foundemployee = await { EmployeeID: req.body.employeeID }
    EmployeeInfo.findOneAndUpdate(foundemployee, {
        $set: {
            Name: req.body.Name,
            Surname: req.body.Surname,
            Gender: req.body.Gender,
            Birthdate: req.body.Birthdate,
            Religion: req.body.Religion,
            Nationality: req.body.Nationality,
            street: req.body.street,
            City: req.body.City,
            Hire: req.body.Hire,
            zip: req.body.zip,
            Email: req.body.Email,
            Tel: req.body.Tel
        }
    }, function(err) {
        if (err) {
            res.status(504).send({ message: err.message });
        } else {
            console.log("ok");
            res.status(200).send({ message: "success" });
        }
    })
}