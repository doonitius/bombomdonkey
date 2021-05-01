const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login-register');
});

router.post('/', [
  check("user_email","please input your Email!").not().isEmpty(),
  check("user_pass","please input your Password!").not().isEmpty()
], function(req, res, next) {
  const result = validationResult(req);
  var errors = result.errors;
  if (!result.isEmpty()) {
    res.render('login-register', {errors:errors})
  }else {
    res.render("home");
  }

}); 

module.exports = router;
