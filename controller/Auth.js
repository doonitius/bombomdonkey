const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const Employee = require('../model/EmployeeInfo');


// checking route
router.get( '/', function(req, res, next) {
    console.log('sonteen')
})

// Post for employees
router.post( '/employee', function(req, res, next) {
    console.log(req.body)
})

// Post fot register with hashed password
router.post('/register', async (req, res) => {
    const body = req.body;

    if(!(body.email && body.password)) {
        return res.status(400).send({error: "Wrong formatted"});
    }

    const user = new User(body);

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
})

// Post for login
router.post('/signin', async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if(user) {
        const validPassword = await bcrypt.compare(body.password, user.password);
        if(validPassword) {
            res.status(200).json({ message: "Valid password"});
        }
        else {
            res.status(200).json({message: "Invalid password"});
        }
    }
    else {
        res.status(401).json({ error: "User does not exist"});
    }
})

module.exports = router;