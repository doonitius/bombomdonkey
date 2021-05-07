const express = require('express');
const User = require('../model/User');
const jwt_decode = require('jwt-decode');
const localStorage = require("localStorage");

function authUser (role) {
    return async (req, res, next) => {
        const va = localStorage.getItem('role');
        const decoded = jwt_decode(va);
        const gRole = decoded.ROLE;
        //const gRole = await User.findOne({email: "jat0800@gmail.com"});
        if (!isAuthorized(gRole, role)) {
        res.status(403).json({message: "forbidden"});
        }
        next();
 }
}

function isAuthorized (userRole, allowRoles) {
    return userRole === allowRoles;
}

module.exports = {authUser}