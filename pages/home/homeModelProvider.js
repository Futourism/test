/*jslint node: true */
"use strict";

var HomeModel = require("./homeModel");
var HomeRepository = require("./homeRepository");

var provider = {
    get: function (req, callback) {
        HomeRepository.getConfig(req, function (docs) {
            if (docs.length > 0) {
                HomeModel.title = docs[0].title;
            }
            callback(HomeModel);
        });
    }
};

module.exports = provider;