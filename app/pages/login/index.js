const controller = require('./controller');
require('./style.scss');

angular
.module('login-page', ['services'])
.controller('LoginController', controller);