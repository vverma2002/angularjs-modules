(function () {
    'use strict';

    angular.module('phone').config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        console.log('loading phone routeConfig');

        // $routeProvider.when('/phones', {
        //     template: '<phone-list></phone-list>'
        // }).when('/phones/:phoneId', {
        //     template: '<phone-detail></phone-detail>'
        // }).otherwise("/phones");

        $stateProvider

            .state('phone.phones', {
                url: '/phones',
                template: '<phone-list></phone-list>'
                // template: 'hello I am Two <a ui-sref="one">Route One</a>'
                // controller: 'MainCtrl'
            })
            .state('phone.phoneId', {
                url: '/phones/:phoneId',
                template: '<phone-detail></phone-detail>'
                // template: 'hello I am Two <a ui-sref="one">Route One</a>'
                // controller: 'MainCtrl'
            });


    }




})();
