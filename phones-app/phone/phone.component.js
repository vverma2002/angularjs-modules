'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phone').
  component('phone', {
    templateUrl: 'phone/phone.template.html',
    controller: 
      // function ($stateParams, Phone) {
      function (  $state,Phone) {
        var self = this;
        $state.go('phone.phones', {id: 2});
        // self.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone) {
        //   self.setImage(phone.images[0]);
        // });

        // self.setImage = function setImage(imageUrl) {
        //   self.mainImageUrl = imageUrl;
        // };
      }
  });
