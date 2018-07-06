const directive = require('./directive.js');
require('./style.scss');
const favoriteService = require('./favorite.service');

angular
.module('heart-favorite', [])
.directive('heartFavorite', directive)
.service('favoriteService', favoriteService);