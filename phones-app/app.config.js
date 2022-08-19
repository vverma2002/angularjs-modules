'use strict';

angular.module('phonecatApp').config(config);

function config($stateProvider, $urlRouterProvider) {

  console.log('loading phonecatApp config');

  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'loginForm',
    })

    .state('register', {
      url: '/register',
      component: 'registrationForm',
    })

    .state('home', {
      url: '/home',
      template: '<h2 class="Well"> Welcome </h2>'
    })
    .state('phone', {
      url: '/phone',
      component: 'phone',
    })
    .state('about', {
      url: '/about',
      // component: 'phone',
      template: '<h2 class="Well"> About this App! </h2>'
    })
    ;
};

angular.
  module('phonecatApp').
  run(function ($rootScope, $state) {
    // For Testing
    $rootScope.username = 'Anonymous';
    $state.go('phone');
  });



