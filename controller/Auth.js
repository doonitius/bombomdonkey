const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const Employee = require('../model/EmployeeInfo');
const { verifies, getRole } = require('./verifytoken');
const role = require('../authorization/role');
const {authUser} = require('./authUser');


// checking route
router.get( '/', function(req, res, next) {
    console.log('sonteen')
})

//post for add employee
router.post('/addEmployee', async (req, res) => {
    const Employee = new EmployeeInfo({
        EmployeeID: req.body.EmployeeID,
        PositionID: req.body.PositionID,
        Name: req.body.Name,
        Surname: req.body.Surname,
        Gender: req.body.Gender,
        Birthdate: req.body.Birthdate,
        Religion: req.body.Religion,
        Nationality: req.body.Nationality,
        Tel: req.body.Tel,
        Email: req.body.Email,
        street: req.body.street,
        zip: req.body.zip,
        Hire: req.body.Hire
    });
    try {
        const savedEmployee = await Employee.save();
        res.json(savedEmployee);
    } catch (err) {
        res.json({ message })
    }

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
            const token = jwt.sign({ ROLE: user.ROLE}, process.env.TOKEN_SECRET);     //get token for login
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

router.get('/post', verifies, authUser(role.HRPAY) ,(req,res) => {
    res.json({
        posts: {
            title: "my post",
            des: "hahahahahh"
        }
    });
})

module.exports = router;