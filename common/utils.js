/*jslint node: true */
"use strict";

var utils = {
    /* Merge two objects */
    extend: function (target, source) {
        var a = Object.create(target);
        Object.keys(source).map(function (prop) {
            prop in a && (a[prop] = source[prop]);
        });
        return a;
    }
};

module.exports = utils;