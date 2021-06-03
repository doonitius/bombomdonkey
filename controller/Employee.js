const express = require('express');
const Education = require('../model/EducationHistory');
const EmployeeInfo = require('../model/EmployeeInfo');
const Position = require('../model/PositionInfo');
const User = require('../model/User');
const bcrypt = require('bcryptjs');

//post for add employee
exports.add = async (req, res) => {

    const validposition = await Position.findone({ PositionID: req.body.positionid});
    if(validposition){

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
    else {
        res.status(404).send({message: "Position does not exist"});
    }
}