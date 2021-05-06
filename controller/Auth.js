const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const Employee = require('../model/EmployeeInfo');
const verify = require('./verifytoken');


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
    // substr() var em = body.email.substr(0, 6);
    if(user) {
        const validPassword = await bcrypt.compare(body.password, user.password);
        if(validPassword) {
            const token = jwt.sign({ _id: user._id}, process.env.TOKEN_SECRET);     //get token for login
            res.header('auth-token', token).json({message: "Valid password",
        token: token,
        role: user.ROLE});
            
        }
        else {
            res.status(200).json({message: "Invalid password"});
        }
    }
    else {
        res.status(401).json({ error: "User does not exist"});
    }
})

router.get('/post', verify, (req,res) => {
    res.json({
        posts: {
            title: "my post",
            des: "hahahahahh"
        }
    });
})

module.exports = router;