'use strict';

angular.
  module('core.logo').
  factory('Logo', ['$resource',
    function($resource) {
      return $resource('phone/phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
