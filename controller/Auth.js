const express = require('express');
const router = express.Router();
const User = require('../model/EmployeeInfo');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const { verifies, getRole } = require('./verifytoken');
const role = require('../authorization/role');
const {authUser} = require('./authUser');
const localStorage = require("localStorage");
const jwt_decode = require("jwt-decode");  //jwt-decode

// checking route
router.get( '/', function(req, res, next) {
    console.log('sonteen')
})


// Post fot register with hashed password
router.post('/register', async (req, res) => {
    const body = req.body;

    if(!(body.email && body.password)) {
        res.status(400).send({error: "Wrong formatted"});
    }

    const user = new User(body);

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
})

// Post for login
exports.login = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ EmployeeID: body.EmployeeID });
    // substr() var em = body.email.substr(0, 6);
    if(user) {
        const validPassword = await bcrypt.compare(body.password, user.password);
        if(validPassword) {
            const token = jwt.sign({ ROLE: user.ROLE}, process.env.TOKEN_SECRET);     //get token for login
            res.status(200).send({token});
        }
        else {
           res.status(401).send({message: "Invalid password"});
        }
    }
    else {
        res.status(404).send({ message: "User does not exist"});
    }
}

module.exports = router; 