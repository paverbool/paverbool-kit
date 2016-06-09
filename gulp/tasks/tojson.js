'use strict';

var gulp = require('gulp');
var toJson = require('gulp-to-json');
var options = require('../config');

gulp.task('tojson', function () {
    gulp.src(options.markup.compiled)
        .pipe(toJson({
            relative: true,
            filename: options.pages_list,
            strip: /^_|(.html)/g
        }));
});