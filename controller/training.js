const trainingInfo = require('../model/trainInfo');
const express = require('express');
const trainee = require('../model/trainRe');
const Employee = require('../model/EmployeeInfo');
require('mongoose');

exports.addInfo = async(req, res) => {
    const id = await trainingInfo.findOne({ TrainID: req.body.trainID });
    if (id) {
        return res.status(400).send({ message: "trainID already exist!" })
    }
    const training = new trainingInfo({
        TrainID: req.body.trainingID,
        Name: req.body.trainingT,
        Detail: req.body.detail
    });
    try {
        const savedtraining = await training.save();
        res.json(savedtraining);
    } catch (err) {
        console.error(err)
        res.send({ message: "error" })
    }
}

exports.addEmp = async(req, res) => {
    var i;
    for (i = 0; i < req.body.length; i++) {
        console.log(req.body[i])
        const id = await Employee.findOne({ EmployeeID: req.body[i].empID })
        if (!id) {
            return res.status(404).send({ message: "Don't have this employeeID!" })
        }
        const trainRe = new trainee({
            EmployeeID: req.body[i].empID,
            TrainID: req.body[i].tID,
            startDate: req.body[i].sDate,
            endDate: req.body[i].eDate
        });
        try {
            const savedtrainRe = await trainRe.save();
            res.status(200).send(savedtrainRe);
        } catch (err) {
            console.error(err)
            res.send({ message: "error" })
        }
    }
}

exports.view = async(req, res) => {
    const train = await trainingInfo.find({}, { "_id": 0, "TrainID": 1, "Name": 1 });
    try {
        console.log(train);
        res.status(200).send({ train });
    } catch (err) { res.status(400).send(err); }
}

exports.delete = async(req, res) => {
    const foundtraining = await { TrainID: req.body.TrainID };
    trainingInfo.deleteOne(foundtraining, function(err, result) {
        if (err) {
            res.status(504).send({ message: err.message });
        }
        trainee.deleteMany(foundtraining, function(err) {
            if (err) {
                res.status(500).send({ message: "error delete participant" });
            }
            res.status(200).send({ message: "success delete training" });
        })
    })
}

exports.viewOne = async(req, res) => {
    const foundtrain = await trainingInfo.findOne({ TrainID: req.body.TrainID }, { "_id": 0, "__v": 0 });
    console.log(req.body.TrainID)
    if (!foundtrain) {
        return res.status(404).send({ message: "Train not found!" });
    }
    const trainer = await trainee.find({ TrainID: req.body.TrainID }, { "_id": 0, "EmployeeID": 1 })
    var i;
    var name = [];
    console.log(trainer);
    for (i = 0; i < trainer.length; i++) {
        console.log(trainer[i])
        const emName = await Employee.find({ EmployeeID: trainer[i].EmployeeID }, { "_id": 0, "Name": 1 });
        console.log(emName);
        name[i] = emName.Name;
    }
    console.log(name);
    try {
        res.status(200).send({ foundtrain, name, trainer });
    } catch (err) { res.status(400).send(err); }
}