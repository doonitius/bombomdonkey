const Promotion = require('../model/promoHis');
const express = require('express');
const Employee = require('../model/EmployeeInfo');
const position = require('../model/PositionInfo');

exports.add = async (req, res) => {
    //!!!
    if(!req.body) {
        res.status(400).send({message: "Have to have all data"});
    }
    //
    const id = await Employee.findOne({ EmployeeID: req.body.employeeID });
    const posi = await position.findOne({PositionID: req.body.ppID});
    const promo = new Promotion({
        EmployeeID: req.body.employeeID,
        promoDate: req.body.pdate,
        PreviousPosition: req.body.ppID
    });
    if(!id || !posi) {
        return res.status(404).send({message: "EmployeeID or PreviousPosition not found!"});
    }
    try {
        const savedpromo = await promo.save();
    } catch (err) {
        res.send({message: "error" })
    }
}
