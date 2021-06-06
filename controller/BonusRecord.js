const express = require('express');
const Employee = require('../model/EmployeeInfo');
const bonus = require('../model/BonusRe');

exports.add = async(req, res) => {

    const id = await Employee.findOne({ EmployeeID: req.body.employeeID });
    const bon = new bonus({
        EmployeeID: req.body.employeeID,
        Date: req.body.bdate,
        Amount: req.body.amount
    });
    if (!id) {
        return res.status(404).send({ message: "EmployeeID not found!" });
    }
    try {
        const savedbon = await bon.save();
        res.status(200).send({ amount: bon.Amount })
    } catch (err) {
        res.send({ message: "error" })
    }
}