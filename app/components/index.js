require('./search-bar');
require('./select-options');
require('./artist-card');
require('./heart-component');
require('./generic-card');
require('./album-card');
require('./track-card');

angular
.module('components', [
  'search-bar',
  'select-options', 
  'artist-card',
  'heart-favorite', 
  'generic-card',
  'album-card', 
  'track-card'
]);