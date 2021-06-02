const express = require('express');

const Education = require('../model/EducationHistory');
const Employee = require('../model/EmployeeInfo');
//post for add employee
exports.add = async (req, res) => {

    const Employee = new EmployeeInfo({
        EmployeeID: req.body.employeeid,
        PositionID: req.body.positionid,
        Name: req.body.firstame,
        Surname: req.body.lastname,
        Gender: req.body.gender,
        Birthdate: req.body.birth,
        Religion: req.body.religion,
        Nationality: req.body.nation,
        street: req.body.street,
        city: req.body.city,
        Hire: req.body.joined
    });
    try {
        const savedEmployee = await Employee.save();
    } catch (err) {
        res.send({message })
    }

}