import {foo} from "../modules/foo";
import {a as myArr} from "../modules/vars";
import GLOBAL from "./GLOBAL";
/**
 * страница Home
 */
export default {
    /**
     * метод инициализации для страницы
     */
    init(){
        /**
         * инициализируем модальное окно,
         * которое есть на этой и других страницах
         */
        GLOBAL.modal_contact_form();
        
        /**
         * инициализируем сладейр для home page
         */
        this.main_slider();
        this.try_ES6();
    },

    /**
     * метод для иницилизации слайдера
     */
    main_slider () {
        console.log('Main slider for home page', this);
    },

    try_ES6 () {
        let {a, b} = myArr;
        console.log(`${a}, ${b} `, myArr);
        const executeFunction = foo(a, b);
        console.log(executeFunction);
        console.log(this);
        this.example_wp_ajax();
    },

    example_wp_ajax () {
        console.log(vars);
        $.ajax({
            type: 'GET',
            url: vars.ajaxUrl,
            data: {
                action: 'add_content'
            },
            dataType: 'html',
            success (response) {
                $('#example_wp_ajax').html(process.env.NODE_ENV);
                if (global.vars.example_wp_ajax_callback) {
                    global.vars.example_wp_ajax_callback(response);
                }
            },
            error: function (response) {
                console.error(response.responseText);
            }
        });
    }

};
