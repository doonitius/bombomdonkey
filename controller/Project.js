const projectInfo = require('../model/projectInfo');
const express = require('express');

exports.add = async (req, res) => {

    const Project = new projectInfo({
        ProjectID: req.body.projectId,
        Name: req.body.name,
        Detail: req.body.Detail,
        Status: req.body.status,
        StartDate: req.body.StartDate,
        DueDate: req.body.DueDate,
        ProfitRatio: req.body.profitratio,
        pManager: req.body.pmanager
    });
try {
    const savedProject = await Project.save();
    res.json(savedProject);
} catch (err) {
    console.error(err)
    res.send({err})
}
}

// not finish
exports.view = async (req, res) => {
    const foundPorject = await projectInfo.find({ProjectID: req.body.projectId})
    if(foundPorject) {
        res.json(foundPorject);
    }
    else{
        res.send({message: "Project does not found"});
    }
}