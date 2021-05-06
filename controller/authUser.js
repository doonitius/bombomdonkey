const express = require('express');
const User = require('../model/User');

function authUser (role) {
    return async (req, res, next) => {
        const gRole = await User.findOne({email: "jat0800@gmail.com"});
        if (!isAuthorized(gRole.ROLE, role)) {
        res.status(403).json({message: "forbidden"});
        }
        next();
 }
}

function isAuthorized (userRole, allowRoles) {
    return userRole === allowRoles;
}

module.exports = {authUser}