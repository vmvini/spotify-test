const NO_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

module.exports = function($scope) {
  'ngInject';
  
  const vm = this;
  
  vm.rawAlbum = $scope.album;
  vm.album = processAlbumData($scope.album);

  $scope.$on('show.details', () => {
    debugger;
  });
 
  function processAlbumData(album) {
    const artists = album.artists.map( a => a.name );
    return {
      artists: artists, 
      author: artists.length > 1 ? 'Various artists' : artists[0].name,
      id: album.id,
      available_markets: album.available_markets.join(', '), 
      image: album.images.length > 0 ? album.images[0].url : NO_IMG_URL, 
      name: album.name
    };
  }

    
};