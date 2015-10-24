/*jslint node: true */
"use strict";

var routeConfig = {
    addRouteToPage: function (app, route, page) {
        app.use(route, require("./" + page + "/" + page + "Controller"));
    },
    
    setRoutes: function (app) {
        this.addRouteToPage(app, "/", "home");
    }
};

module.exports = routeConfig;