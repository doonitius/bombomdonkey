const branchInfo = require('../model/BranchInfo');
const express = require('express');

exports.add = async (req, res) => {

    const existedbranch = await branchInfo.find({BranchID: req.body.branchid})
    console.log(existedbranch)
    if(existedbranch.length != 0) {
        return res.status(400).send({message: "Branch already exist"})
    }
        const branch = new branchInfo({
        BranchID : req.body.branchid,
        telBranch : req.body.telbranch,
        Address : req.body.Address
        })
    try{
        const savedbranch = await branch.save();
        res.status(200).send(savedbranch);
    }catch(err){
        res.status(400).send({message: err.message})
    }
}