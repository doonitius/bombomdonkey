const Project = require('../model/projectInfo');
const express = require('express');

exports.add = async (req, res) => {
try {

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

    const savedProject = await Project.save();
    res.json(savedProject);
} catch (err) {
    res.json({ message})
}
}

//exports.view = async (req, res) =>