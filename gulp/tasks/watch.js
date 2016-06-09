'use strict';

var gulp = require('gulp');
var options = require('../config');

var browserSync;
var reload = function() {};

if (options.liverReload) {
    browserSync = require('browser-sync').create();
    reload = browserSync.reload;
}

gulp.task('watch', ['tojson'], function() {

    if (options.liverReload) {
        browserSync.init( {
            logPrefix: 'Live reload: ',
            server: './'
        } );
    }

    gulp.watch(options.styles.watch, ['scss', reload]);
    gulp.watch(options.markup.watch, ['htmlimport' , reload]);
    gulp.watch(options.scripts.watch, ['js' , reload]);

});