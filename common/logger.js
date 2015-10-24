/*jslint node: true */
"use strict";

var logger = {
    log: function (message, req) {
        var logMessage, separator = " | ";
        
        logMessage = (new Date()).toString() + separator;
        if (req !== undefined) {
            logMessage += req.protocol + '://' + req.get('host') + req.originalUrl + separator;
        }
        logMessage += message;
        
        console.log(logMessage);
    }
};

module.exports = logger;