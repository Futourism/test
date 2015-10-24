/*jslint node: true, nomen: true */
"use strict";

require("app-module-path").addPath(__dirname);

var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var routeConfig = require("pages/routeConfig");
var errorHandlers = require("pages/error/errorHandlers");
var mongo = require("mongodb");
var dbConn = require("common/dbConn");
var engine = require("ejs-mate");

var app = express();

// view engine setup
app.engine("ejs", engine);
app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, "public")));

dbConn.create(app, "localhost", 27017, "test");

routeConfig.setRoutes(app);

// Listen to the port
app.listen(8080);

errorHandlers.createHandlers(app);

module.exports = app;