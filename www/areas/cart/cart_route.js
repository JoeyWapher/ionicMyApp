angular.module('cart.route',['cart.controller', 'cart.services'])
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab.cart', {
    url: '/cart',
    views:{
      'cart': {
        templateUrl: 'areas/cart/cart.html',
        controller: 'CartCtrl'
      }
  }
  });
});
