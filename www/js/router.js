angular.module('router',['starter.controllers',
  'starter.services',
  'guidePage.route',
  'home.route',
  'catagory.route',
  'cart.route',
  'account.route',
  'tabs.route'
])
.config(function($stateProvider, $urlRouterProvider) {
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/guidePage');

});
