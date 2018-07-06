const directive = require('./directive.js');
require('./style.scss');

angular
.module('select-options', [])
.directive('selectOptions',directive);