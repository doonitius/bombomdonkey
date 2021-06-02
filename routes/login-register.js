const express = require('express');
const router = express.Router();
const { body, validationResult, check, header } = require('express-validator');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const localStorage = require("localStorage");
const jwt_decode = require("jwt-decode");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login-register');
});

router.post('/', [
  check("email","please input your Email!").not().isEmpty(),
  check("pass","please input your Password!").not().isEmpty()
], async (req, res) => {
  const body = await req.body;
  const user = await User.findOne({ email: body.email });
  const result = validationResult(req);
  var errors = await result.errors;
  if(!result.isEmpty()) {
    res.sendStatus(500);
  }
  if(user) {
    const validPassword = await bcrypt.compare(body.pass, user.password);
    if(validPassword) {
        const token = jwt.sign({ ROLE: user.ROLE}, process.env.TOKEN_SECRET);     //get token for login
        localStorage.setItem('role',token);
        res.render("home");//.headers('auth-token', token);
    }
    else {
        res.status(200).json({message: "Invalid password"});
    }
  }
  else {
    res.status(401).json({ error: "User does not exist"});
  }
}); 

module.exports = router;