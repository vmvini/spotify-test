const directive = require('./directive.js');
require('./style.scss');

angular
.module('album-card', [])
.directive('albumCard', directive);