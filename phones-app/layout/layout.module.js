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

    angular.module('layout', [
        'layout.layoutHeader',
        'layout.layoutBody',
        'layout.layoutFooter',
    ]);

    // Run - Startup
    angular.module('layout').run(function () {
        console.log('layout Run - Startup..');
    });
})();
