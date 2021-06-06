const department = require("../model/DepartmentInfo");
const express = require('express');
const employee = require("../model/EmployeeInfo");
const positionInfo = require("../model/PositionInfo");
const { find } = require("../model/EmployeeInfo");
const workRe = require("../model/workRe");

exports.show = async(req, res) => {
    var female = await employee.countDocuments({ Gender: "female" })
    var male = await employee.countDocuments({ Gender: "male" })
    var other = await employee.countDocuments({ Gender: "other" })
    var jan = await employee.countDocuments({ Hire: { $gt: new Date('2019-12-31'), $lt: new Date('2020-02-01') } })
    var feb = await employee.countDocuments({ Hire: { $gt: new Date('2020-01-31'), $lt: new Date('2020-03-01') } })
    var mar = await employee.countDocuments({ Hire: { $gt: new Date('2020-02-29'), $lt: new Date('2020-04-01') } })
    var apr = await employee.countDocuments({ Hire: { $gt: new Date('2020-03-31'), $lt: new Date('2020-05-01') } })
    var may = await employee.countDocuments({ Hire: { $gt: new Date('2020-04-30'), $lt: new Date('2020-06-01') } })
    var june = await employee.countDocuments({ Hire: { $gt: new Date('2020-05-31'), $lt: new Date('2020-07-01') } })
    var july = await employee.countDocuments({ Hire: { $gt: new Date('2020-06-30'), $lt: new Date('2020-08-01') } })
    var aug = await employee.countDocuments({ Hire: { $gt: new Date('2020-07-31'), $lt: new Date('2020-09-01') } })
    var sep = await employee.countDocuments({ Hire: { $gt: new Date('2020-08-31'), $lt: new Date('2020-10-01') } })
    var oct = await employee.countDocuments({ Hire: { $gt: new Date('2020-09-30'), $lt: new Date('2020-11-01') } })
    var nov = await employee.countDocuments({ Hire: { $gt: new Date('2020-10-31'), $lt: new Date('2020-12-01') } })
    var dec = await employee.countDocuments({ Hire: { $gt: new Date('2020-11-30'), $lt: new Date('2021-01-01') } })
    try {
        console.log(jan)
        res.status(200).json({ female, male, other, jan, feb, mar, apr, may, june, july, aug, sep, oct, nov, dec })
    } catch (err) {
        res.status(500).json({ error: 'message' })
    }
}

async function countEmp(counting) {
    var num = 0;
    for (const element of counting) {
        var counter = await employee.countDocuments({ PositionID: element.PositionID });
        num = num + counter;
    }
    return num;
}

exports.countdep = async(req, res) => {
    var countMarket = await positionInfo.find({ DepartmentID: "DP01" });
    var countAcc = await positionInfo.find({ DepartmentID: "DP02" });
    var countPro = await positionInfo.find({ DepartmentID: "DP03" });
    var countResearch = await positionInfo.find({ DepartmentID: "DP04" });
    var countHR = await positionInfo.find({ DepartmentID: "DP05" });
    var countIT = await positionInfo.find({ DepartmentID: "DP06" });

    var marketdep = await countEmp(countMarket);
    var accdep = await countEmp(countAcc);
    var prodep = await countEmp(countPro);
    var researchdep = await countEmp(countResearch);
    var hrdep = await countEmp(countHR);
    var itdep = await countEmp(countIT);

    var depCounter = [marketdep, accdep, prodep, researchdep, hrdep, itdep]

    console.log(depCounter);
    try {
        res.status(200).send(depCounter);
    } catch (err) {
        res.status(400).send({ message: "error" });
    }

}

async function getemp(gogo) {
    var count;
    var i = 0;
    var value = [];
    for (const element of gogo) {
        count = await workRe.countDocuments({ EmployeeID: element.EmployeeID });
        value.push([count, element.EmployeeID]);
    }
    return value;
}


exports.hardwork = async(req, res) => {

    var numberEmp = await employee.find({})

    var temp = await getemp(numberEmp);
    var i;
    var j;
    var most = temp[0][0];
    var emp;
    console.log("temp[1] " + most);
    console.log("temp is " + temp);
    for (i = 0; i < temp.length; i++) {
        if (most < temp[i][0]) {
            most = temp[i][0];
            emp = temp[i][1];
        }
    }
    console.log(most)
    console.log(emp)
    const name = await employee.findOne({ EmployeeID: emp }, { "_id": 0, "Name": 1, "Surname": 1 })
    console.log(name)
    try {
        res.status(200).json({ most, emp, name })
    } catch (err) {
        res.status(500).json({ error: 'message' })
    }
}