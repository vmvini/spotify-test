const NO_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

module.exports = function($scope) {
  'ngInject';
  
  const vm = this;

  vm.artist = processArtistData($scope.artist);

  $scope.$on('show.details', () => {
    debugger;
  });
 
  function calcPopularity(popularity) {
    if ( popularity >= 80 ) {
      return 'Hot';
    } else if ( popularity >= 60 && popularity <= 79 ) {
        return 'Cool';
    } else if ( popularity >= 30 && popularity <= 59 ) {
        return 'Regular'
    } 
    return 'Underground';
  }

  function processArtistData(artist) {
    return {
      id: artist.id,
      genres: getGenres(artist.genres),
      image: artist.images.length > 0 ? artist.images[0].url : NO_IMG_URL, 
      name: artist.name, 
      popularity: calcPopularity(artist.popularity)
    };
  }

  function getGenres(genres) {
    if ( genres.length > 0 ) 
      return genres.join(', ');
    return 'no genre found';
  }
    
};