'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('login.registrationForm').
  component('registrationForm', {
    templateUrl: 'login/registration-form/registration-form.template.html',
    controller:
      function ( $rootScope, $location) {
        var vm = this;
        // vm.username = $routeParams.username;

        vm.register = register;
        ///////////////
        function register() {
          // write register code here.. 

          $rootScope.username = vm.student.firstName;


          // $location.path('/student/' + username)
          $location.path('/login');
        };
      }


  });


