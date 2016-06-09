'use strict';

var gulp = require('gulp');
var rigger = require('gulp-rigger');
var options = require('../config');

gulp.task('htmlimport', function () {

    gulp.src(options.markup.src)
        .pipe(rigger())
        .pipe(gulp.dest(options.markup.dest));

});