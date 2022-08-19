(function () {
    'use strict';

    // Adhere to standards: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

    // Controllers — [file_name].ctrl.js
    // Templates — [file_name].tpl.html
    // Directives — [file_name].drct.js
    // Factories — [file_name].fct.js
    // Values — [file_name].val.js
    // Services — [file_name].srv.js
    // Modules — [app_name].[module_name].js

    angular.module('phone', [
        'ui.router',
        'phone.phoneList',
        'phone.phoneDetail'
    ]);

    // Run - Startup
    angular.module('phone').run(function () {
        console.log('phone Run - Startup..');
    });
})();
