const NO_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

module.exports = function($scope, spotify, $mdDialog) {
  'ngInject';
  
  const vm = this;
  
  vm.rawArtist = $scope.artist;
  vm.artist = processArtistData($scope.artist);

  $scope.$on('show.details', () => {
    openModal(vm.artist.id);
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
    
  function openModal(artistId) {
    $mdDialog.show({
      controller: function() {
        'ngInject';
        const vm = this;
        spotify
        .artistAlbums(artistId)
        .then( res => {
          vm.items = res.data.items;
        }, 
        err => {
          alert('error while fetching data');
        });
      },
      controllerAs: 'vm',
      template: modalTemplate(),
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      hasBackdrop: true,
      escapeToClose: true,
      fullscreen: false,
      bindToController: true,
      scope: $scope.$new()
    });
  }

  function modalTemplate() {
    return `
      <h1>Albums</h1>
      <div class="list"> 
      <div ng-if="!vm.items || vm.items.length === 0">
          No results
      </div>
      <div class="item" ng-repeat="album in vm.items">
          <album-card album="album">
          </album-card>
      </div>
      </div>
    `;
  }
  

};