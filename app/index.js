require('./vendor.js');
require('./local.modules.js');
const configRoute = require('./routes/index.js');
const listRoute = require('./routes/list.route.js');
const loginRoute = require('./routes/login.route');

angular
.module('spotifyApp', [
  //external modules below
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngSanitize',
  'ngMaterial',
  'angular-jwt',
  //local modules below
  'start-page',
  'login-page',
  'components', 
  'services',
])
.config(configRoute)
.config(listRoute)
.config(loginRoute);