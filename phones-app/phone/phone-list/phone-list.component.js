'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phone.phoneList').
  component('phoneList', {
    templateUrl: 'phone/phone-list/phone-list.template.html',
    controller: function (Phone, $rootScope) {
      this.phones = Phone.query();
      this.orderProp = 'age';

      // this.username= $rootScope.username ;

    }
    // ,
    // bindings: {
    //   username: '=',
    // }
  });
