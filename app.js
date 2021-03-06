var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { body } = require('express-validator');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

require('dotenv/config');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

///////    app.use('/', loginregisterRouter);
app.get('/', function(req, res) {
    res.send('hello world')
});
require("./routes/project")(app);
require("./routes/behavior")(app);
require("./routes/promoHis")(app);
require("./routes/BonusRe")(app);
require("./routes/payment")(app);
require("./routes/employee")(app);
require("./routes/history")(app);
require("./routes/timerecord")(app);
require("./routes/position")(app);
require("./routes/branch")(app);
require("./routes/department")(app);
require("./routes/training")(app);
require("./routes/home")(app);

/*
var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload')
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + '-' + Date.now())
  }
});

var upload = multer({ storage: storage});
*/

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