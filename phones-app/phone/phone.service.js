'use strict';

angular.
  module('phone').
  factory('Phone', ['$resource',
    function($resource) {
      console.log('loading Phone Factory');
      return $resource('phone/phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
