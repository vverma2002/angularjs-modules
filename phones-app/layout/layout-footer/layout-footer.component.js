'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('layout.layoutFooter').
  component('layoutFooter', {
    templateUrl: 'layout/layout-footer/layout-footer.template.html',
    controller:
      function () {
        var vm = this;


        // vm.authenticate = authenticate;

        // ///////////////
        // function authenticate(username) {
        //   // write authentication code here.. 
        //   if (username === 'a') {
        //     $rootScope.username = 'Vikrant';
        //     $location.path('/phones')
        //   } else {
        //     vm.message = "Invalid User";
        //   }
        // };

      }
  });


