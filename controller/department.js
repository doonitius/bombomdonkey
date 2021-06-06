const departmentInfo = require('../model/DepartmentInfo');
const branchInfo = require('../model/BranchInfo')
const express = require('express');

exports.add = async(req, res) => {
    if (!req.body.departmentID) {
        return res.send({ message: "information require" });
    }
    const existedbranch = await branchInfo.findOne({ BranchID: req.body.branchID })
    const existeddepartment = await departmentInfo.find({ DepartmentID: req.body.departmentID })
    if (existedbranch.length == 0) {
        return res.status(400).send({ message: "Branch does not exist" });
    }

    for (const element of existeddepartment) {
        if (element.DepartmentID == req.body.departmentID &&
            existedbranch.BranchID == req.body.branchID) {
            return res.status(500).send({ message: "Duplicate department in same branch" })
        }
    }

    const department = new departmentInfo({
        DepartmentID: req.body.departmentID,
        BranchID: req.body.branchID,
        Name: req.body.departmentT,
        ManagerID: req.body.managerID
    })
    try {

        const saveddepartment = await department.save();
        res.status(200).send({ message: "success add department" });
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}