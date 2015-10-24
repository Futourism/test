/*jslint node: true */
"use strict";

var Utils = require("../../common/utils");
var LayoutModel = require("../layouts/layoutModel");

var HomeModel = {};
HomeModel = Utils.extend(HomeModel, LayoutModel);

module.exports = HomeModel;