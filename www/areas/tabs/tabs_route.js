angular.module('tabs.route',['tabs.controller'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'areas/tabs/tabs.html'
      })

  });
