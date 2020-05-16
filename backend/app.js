var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var pagesRouter = require('./routes/pages');

var app = express();

var mongoose = require("mongoose");
var url = "mongodb://localhost:27017/blogtest";
mongoose.connect(url).then(
  (db) => {
    console.log("Connected to the mongoDB server");
  },
  (err) => console.log(err)
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/pages',pagesRouter);
app.use('*', indexRouter);

module.exports = app;
