const express = require('express');
const Employee =  require('../model/EmployeeInfo'); 
const Payment =  require('../model/Payment');

exports.add = async (req, res) => {
    const id = await Employee.findOne({ EmployeeID: req.body.employeeID });
    const pay = new Payment({
        EmployeeID: req.body.employeeID,
        PaymentID: req.body.paymentID,
        Date: req.body.paymentdate,
        Tax: req.body.tax,
        Pay: req.body.pAmount,
        deduction: req.body.deduction[0]
    });
    if(!id) {
        return res.status(404).send({message: "EmployeeID not found!"});
    }
    try {
        const savedpay = await pay.save();
        res.status(200).send(pay.PaymentID)
    } catch (err) {
        console.log(req.body)
        res.send({message: "error" })
    }
}