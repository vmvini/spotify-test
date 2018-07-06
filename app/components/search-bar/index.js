const directive = require('./directive.js');
require('./style.scss');

angular
.module('search-bar', [])
.directive('searchBarDirective',directive);