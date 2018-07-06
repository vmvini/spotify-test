module.exports = ($locationProvider, $urlRouterProvider) => {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise(($injector) => {
    const state = $injector.get('$state');
    state.go('login');
  });
};