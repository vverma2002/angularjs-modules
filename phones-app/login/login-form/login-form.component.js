'use strict';

angular.
  module('login.loginForm').
  component('loginForm', {
    templateUrl: 'login/login-form/login-form.template.html',
    controller:
      function ($rootScope, $state) {
        var vm = this;

        vm.authenticate = authenticate;
        ///////////////
        function authenticate(username) {
          // write authentication code here.. 
          if (username === 'a') {

            $rootScope.username = 'Vikrant';
            // $location.path('/phone')
            // $location.path('/dashboard')
            // $state.go('phone');
            $state.go('home')

          } else {
            vm.message = "Invalid User";
          }
        };
      }
  });


