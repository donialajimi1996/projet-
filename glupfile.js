"use strict";

//dependencies

var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var changed = require("glup-changed");

//-SCSS/CSS
var SCSS_SRC = "./src/Assets/SCSS/**/*.scss";
var SCSS_DEST = "./src/Assets/CSS";
// compile scss

gulp.task("compile_scss", function() {
  gulp
    .src(SCSS_SRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});

//detect changes in SCSS
gulp.task("watch_scss", function() {
  gulp.watch(SCSS_SRC, ["compile_scss"]);
});

//run tasks
gulp.task("default", ["watch_scss"]);
