var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var loginregisterRouter = require('./routes/login-register');
const { body } = require('express-validator');
const mongoose = require('mongoose');
const Auth = require('./controller/Auth');
const bodyParser = require('body-parser');
require('dotenv/config');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

///////    app.use('/', loginregisterRouter);
app.use('/api', Auth);

require("./routes/project")(app);
require("./routes/behavior")(app);
require("./routes/promoHis")(app);
require("./routes/BonusRe")(app);
require("./routes/payment")(app);
require("./routes/employee")(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('connected to DB')
);

module.exports = app;
app.listen(3000, () => console.log("Server is running..."));