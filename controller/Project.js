const projectInfo = require('../model/projectInfo');
const express = require('express');
const Employee = require('../model/EmployeeInfo');
const Workrecord = require('../model/workRe');

exports.addProject = async(req, res) => {

    const id = await Employee.findOne({ EmployeeID: req.body.pManager });
    if (!id) {
        return res.status(404).send({ message: "No this managerID!" });
    }
    const pr = await projectInfo.findOne({ ProjectID: req.body.projectID });
    if (pr) {
        return res.status(400).send(err);
    }
    const Project = new projectInfo({
        ProjectID: req.body.projectID,
        Name: req.body.projectName,
        Detail: req.body.detail,
        Status: req.body.status,
        StartDate: req.body.startDate,
        DueDate: req.body.dueDate,
        ProfitRatio: req.body.profit,
        pManager: req.body.pManager
    });
    try {
        const savedProject = await Project.save();
        res.status(200).send(savedProject);
    } catch (err) {
        console.error(err)
        res.status(400).send(err.message)
    }
}

// not finish
exports.addParti = async(req, res) => {
    var i;
    for (i = 0; i < req.body.length; i++) {
        console.log(req.body[i])
        const id = await Employee.findOne({ EmployeeID: req.body[i].empID })
        if (!id) {
            return res.status(404).send({ message: "Don't have this employeeID!" })
        }
        const WorkRe = new Workrecord({
            EmployeeID: req.body[i].empID,
            ProjectID: req.body[i].pID,
            EmployeeStartDate: req.body[i].sDate,
            EmployeeEndDate: req.body[i].dDate
        });
        console.log(WorkRe);
        try {
            const savedWorkRe = await WorkRe.save();
            console.log("in try");
            console.log(WorkRe);
            //res.status(200).send(savedWorkRe);
        } catch (err) {
            console.error(err)
            res.status(400).send({ message: "error" })
        }
    }
    res.status(200).send("add participant succes");
}

exports.viewAll = async(req, res) => {
    const pro = await projectInfo.find({}, { "_id": 0, "ProjectID": 1, "Name": 1, "Status": 1, "StartDate": 1 });
    try {
        console.log(pro);
        res.status(200).send({ pro });
    } catch (err) { res.status(400).send(err); }
}

exports.viewOne = async(req, res) => {
    const foundproject = await projectInfo.findOne({ ProjectID: req.body.ProjectID }, { "_id": 0, "__v": 0 });
    //console.log(req.body.employeeID)
    if (!foundproject) {
        return res.status(404).send({ message: "Project not found!" });
    }
    const work = await Workrecord.find({ ProjectID: req.body.ProjectID }, { "_id": 0, "EmployeeID": 1 })
    var i;
    var name = [];
    console.log(work);
    for (i = 0; i < work.length; i++) {
        const emName = await Employee.findOne({ EmployeeID: work[i].EmployeeID }, { "_id": 0, "EmployeeID": 1, "Name": 1 })
        console.log(emName);
        name[i] = emName.Name;
    }
    //console.log(foundproject);
    //console.log(work);
    console.log(name);
    try {
        res.status(200).send({ foundproject, name, work });
    } catch (err) { res.status(400).send(err); }
}

exports.editProject = async(req, res) => {
    const foundproject = await { ProjectID: req.body.ProjectID }
    projectInfo.findOneAndUpdate(foundproject, {
        $set: {
            Name: req.body.Name,
            Detail: req.body.Detail,
            Status: req.body.Status,
            StartDate: req.body.StartDate,
            DueDate: req.body.DueDate,
            ProfitRatio: req.body.ProfitRatio,
            pManager: req.body.pManager
        }
    }, function(err) {
        if (err) {
            res.status(504).send({ message: err.message });
        } else {
            res.status(200).send({ message: "Success edit project" });
        }
    })
}

exports.deleteProject = async(req, res) => {
    const foundproject = await { ProjectID: req.body.ProjectID }
    projectInfo.findOneAndRemove(foundproject, function(err) {
        if (err) {
            res.status(504).send({ message: "error delete" });
        } else {
            console.log("project delete")
                //res.status(200).send({ message: "project Deleted" });
            Workrecord.deleteMany(foundproject, function(err) {
                if (err) {
                    res.status(500).send({ message: "error delete participant" });
                } else {
                    res.status(200).send({ message: "Super Thanos" })
                }
            })
        }
    })

}