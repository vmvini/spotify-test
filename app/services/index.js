const spotifyService = require('./spotify');
const authInterceptor = require('./auth.interceptor');
const authService = require('./auth.service');

angular
.module('services', [])
.service('spotify', spotifyService)
.service('authService', authService)
.factory('authInterceptor', authInterceptor)
.config(($httpProvider) => {
  'ngInject';
  $httpProvider.interceptors.push('authInterceptor');
});