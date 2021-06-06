const Promotion = require("../model/promoHis");
const express = require("express");
const Employee = require("../model/EmployeeInfo");
const position = require("../model/PositionInfo");

exports.add = async(req, res) => {

    const id = await Employee.findOne({ EmployeeID: req.body.employeeID });
    const posi = await position.findOne({ PositionID: req.body.ppID });
    if (!id) {
        return res.status(404).send({ message: "EmployeeID not found" });
    } else if (!posi) {
        return res.status(404).send({ message: "PositionID not found" });
    }

    const promo = new Promotion({
        EmployeeID: req.body.employeeID,
        promoDate: req.body.pdate,
        PreviousPosition: req.body.ppID,
    });

    try {
        await promo.save();
        res.status(200).send(promo);
    } catch (err) {
        console.log(promo);
        res.send({ message: "error" });
    }
};

exports.viewOne = async(req, res) => {
    const promotion = await Promotion.find({ EmployeeID: req.body.employeeID }, { _id: 0, __v: 0 });
    //console.log(req.body.employeeID)
    if (!promotion) {
        return res
            .status(404)
            .send({ message: "Not have promotion history of this employee!" });
    }
    try {
        console.log(promotion);
        res.status(200).send({ promotion });
    } catch (err) {
        res.status(400).send(err);
    }
};