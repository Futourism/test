/*jslint node: true */
"use strict";

var express = require("express");
var router = express.Router();
var renderer = require("pages/renderer");

/* GET home page. */
router.get("/", function (req, res, next) {
    renderer.renderPage(req, res, "home");
});

module.exports = router;