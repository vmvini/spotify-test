const directive = require('./directive.js');
require('./style.scss');

angular
.module('generic-card', [])
.directive('genericCard', directive);