const controller = require('./controller');
require('./style.scss');

angular
.module('start-page', ['search-bar'])
.controller('StartPageController', controller);