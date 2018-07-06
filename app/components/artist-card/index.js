const directive = require('./directive.js');
require('./style.scss');

angular
.module('artist-card', [])
.directive('artistCard', directive);