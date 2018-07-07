const directive = require('./directive.js');
require('./style.scss');

angular
.module('track-card', [])
.directive('trackCard', directive);