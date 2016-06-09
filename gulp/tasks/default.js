'use strict';

var gulp = require('gulp');
var options = require('../config');
var chalk = require('chalk');

gulp.task('default', function () {
    console.log(
        chalk.green.bgCyan.bold('Please, use ') +
        chalk.blue.bgCyan.bold('gulp dev ') +
        chalk.green.bgCyan.bold('or ') +
        chalk.red.bgCyan.bold('gulp prod ') +
        chalk.green.bgCyan.bold('tasks! ')
    );
});