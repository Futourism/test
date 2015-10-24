/*jslint node: true */
"use strict";

var MemoryCache = require("../../common/memoryCache");

var getConfigFromDB = function (req, callback) {
    var db, collection;
    db = req.db;
    collection = db.get("config");

    collection.find({}, {}, function (err, docs) {
        if (err) {
            console.log("getConfigFromDB error: " + err);
        }
        
        callback(docs);
    });
};

var repository = {
    getConfig: function (req, callback) {
        MemoryCache.dbWrapper("db-config", getConfigFromDB, req, callback);
    }
};

module.exports = repository;