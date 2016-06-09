'use strict';

var options = {

    default_js_file:'global.js', // root folder - assets/js/

    liverReload: true,

    scripts:{
        src: './assets/js/',
        dest:'./dist/js',
        watch: './assets/js/**/*.js'
    },

    styles:{
        src: ['./assets/css/global.scss', './assets/css/pages/**/*.scss'],
        dest:'./dist/css',
        watch: './assets/css/**/*.scss'
    },

    images:{
        src: ['./assets/images/**/*.+(jpeg|jpg|png|gif)', '!./assets/images/to_webp/**'],
        dest:'./dist/images',
        webp_src:'./assets/images/to_webp/**/*.+(jpeg|jpg|png|gif)',
        svg_src:'./assets/images/**/*.svg'
    },

    markup:{
        src:'./assets/html/*.html',
        dest:'./dist/html/',
        compiled: './dist/html/*.html',
        watch:'./assets/html/**/*.html'
    },

    fonts:{
        src:'./assets/fonts/**',
        dest:'./dist/fonts'
    },

    dist: './dist/*',

    pages_list: './pages.json'
};


module.exports = options;