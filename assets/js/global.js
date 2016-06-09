// DO NOT REMOVE THIS!! This polyfill provides correct work in IE while we are using Babel to transform our JS.
import "babel-polyfill";
import HOME from "./modules/HOME";
import ABOUT from "./modules/ABOUT";

// JUST EXAMPLE OF USAGE! Import jQuery from node_modules and set global scope.
// REMOVE ALL THIS FOR YOUR PROJECT
global.jQuery = require('jquery');
global.$ = global.jQuery;

console.info(`Environment: ${process.env.NODE_ENV}`, process.env);
if (process.env.NODE_ENV === 'development') {
    console.log('Тут я могу писать шо хочу - в продакшене это удалиться!')
}


/**
 * Создаем функцию init, которая
 * будет вызываться в любом случае
 */
let init = null;
/**
 * Перебираем window.vars.page,
 * чтобы выяснить, какая у нас страница
 */
switch (global.vars.page) {
    case 'home_page':
        init = HOME.init.bind(HOME);
        break;
    case 'about_page':
    case 'contact_page':
        init = ABOUT.init.bind(ABOUT);
        break;
    default:
        init = () => {
            console.log('default init');
        };
}
/**
 * Вешаем на document.onready нашу инициализацию страницы
 */
$(document).ready(init);







