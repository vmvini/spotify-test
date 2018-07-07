const NO_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

module.exports = function($scope, spotify, $mdDialog) {
  'ngInject';
  
  const vm = this;
  
  vm.rawAlbum = $scope.album;
  vm.album = processAlbumData($scope.album);

  $scope.$on('show.details', () => {
    openModal(vm.album.id, vm.album.image, vm.album.name);
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

  function openModal(albumId, image, name) {
    $mdDialog.show({
      controller: function() {
        'ngInject';
        const vm = this;
        spotify
        .getAllTracks(albumId)
        .then( res => {
          vm.items = res.data.items;
        }, 
        err => {
          alert('error while fetching data');
        });
      },
      controllerAs: 'vm',
      template: modalTemplate(image, name),
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      hasBackdrop: true,
      escapeToClose: true,
      fullscreen: false,
      bindToController: true,
      scope: $scope.$new()
    });
  }

  function modalTemplate(parentImage, parentName) {
    return `
      <h1>Tracks</h1>
      <div class="list"> 
      <div ng-if="!vm.items || vm.items.length === 0">
          No results
      </div>
      <div class="item" ng-repeat="track in vm.items">
          <track-card track="track" parentImage="${parentImage}" parentName="${parentName}">
          </track-card>
      </div>
      </div>
    `;
  }

    
};