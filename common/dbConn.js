/*jslint node: true */
"use strict";

var dbConn = {
    create: function (app, server, port, dbname) {
        var monk, db;
        monk = require("monk");
        db = monk(server + ":" + port.toString() + "/" + dbname);

        app.use(function (req, res, next) {
            req.db = db;
            next();
        });
    }
};

module.exports = dbConn;