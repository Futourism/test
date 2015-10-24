/*jslint node: true */
"use strict";

var renderer = {
    renderPage: function (req, res, page, view) {
        var pageModelProvider = require("pages/" + page + "/" + page + "ModelProvider");
        
        if (view === undefined) {
            view = "_main";
        }
        
        pageModelProvider.get(req, function (model) {
            res.render(page + "/" + view, model);
        });
    }
};

module.exports = renderer;