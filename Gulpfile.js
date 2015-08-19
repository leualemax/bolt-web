//SUPORT
/*jslint node: true */
"use strict";

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  gutil = require('gulp-util'),
   walk    = require('walk'),
  minifyCss = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  server = require('gulp-server-livereload'),
  inquirer = require("inquirer"),
  rename = require("gulp-rename"),
  replace = require('gulp-replace'),
  ghPages = require('gulp-gh-pages');


gulp.task('styles', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css'))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('./www/css'))
    .on('end', function () {
      // gutil.beep();
    });
});

gulp.task('deploy-ghpages', function() {
  return gulp.src('./www/**/*')
    .pipe(ghPages());
});

gulp.task('watch', function () {
  gulp.watch(['./scss/**/*.scss'], ['styles']);
  gulp.watch(['./www/borayu/**/*.scss'], ['styles']);
});

gulp.task('webserver', function () {
  gulp.src('www')
    .pipe(server({
      fallback: 'index.html',
      livereload: true,
      directoryListing: ['www/'],
      open: true
    }));
});

gulp.task('serve', ['styles', 'webserver', 'watch'], function () {

});
