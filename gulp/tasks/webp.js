'use strict';

var gulp = require('gulp');
var webp = require('gulp-webp');
var options = require('../config');

gulp.task('webp', function () {

    return gulp.src(options.images.webp_src)
        .pipe(webp())
        .pipe(gulp.dest(options.images.dest));

});