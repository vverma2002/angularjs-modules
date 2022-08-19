'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('layout.layoutHeader').
  component('layoutHeader', {
    templateUrl: 'layout/layout-header/layout-header.template.html',
    bindings: {
      username: '='
    },
    controller:
      function ( $state,$rootScope) {
        var vm = this;

        vm.logout = logout;

        // ///////////////
        function logout() {
          $rootScope.username =  undefined;
          $state.go('login');
        }

      }
  });


