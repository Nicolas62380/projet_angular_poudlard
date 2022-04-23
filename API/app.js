var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var sorcierRouter = require('./routes/sorciers');

var app = express();
var mongoose = require("mongoose");
var connectionStringLocal = "mongodb+srv://Nicolas:Nicolas@poudlard.geutm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
process.env.connexionStringDistant;
var mongodb = process.env.MONGO_URI || connectionStringLocal;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/sorciers', sorcierRouter);

module.exports = app;
