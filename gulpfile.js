/*jslint node: true */
"use strict";

var gulp = require("gulp");
var LiveServer = require("gulp-live-server");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoPrefixer = require("gulp-autoprefixer");
var minifyCss = require("gulp-minify-css");
var concat = require('gulp-concat');

gulp.task("live-server", function () {
    var server = new LiveServer("app.js");
    server.start();
});

gulp.task("serve", ["live-server"], function () {
    browserSync.init(null, {
        proxy: "http://localhost:8080",
        port: 8081,
        reloadDelay: 5000
    });
});

gulp.task("styles", function () {
    gulp.src("common/app.scss")
        .pipe(sass({
            style: "expanded"
        }).on("error", sass.logError))
        .pipe(autoPrefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
        .pipe(gulp.dest("./public/css/"))
        .pipe(minifyCss())
        .pipe(gulp.dest("./public/css/"));
    
    browserSync.reload();
});

gulp.task("jscripts", function () {
    gulp.src(["node_modules/angular/angular.min.js",
                "node_modules/materialize-css/dist/js/materialize.min.js"])
        .pipe(concat("common.js"))
        .pipe(gulp.dest("./public/js/"));
});

gulp.task("default", ["serve", "jscripts"], function () {
    gulp.watch(["common/**/*.scss", "pages/**/*.scss"], ["styles"]);
});