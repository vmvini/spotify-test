module.exports = function($scope, spotify, $stateParams, authService, $rootScope) {
  'ngInject';
  const vm = this;
  saveSpotifyToken();
  vm.currentQuery = 'a';
  vm.options = ['artist', 'track', 'album'];
  vm.currentType = vm.options[0];
  $rootScope.selectedType = vm.currentType;
  vm.artists = [];
  vm.albums = [];
  vm.tracks = [];

  $scope.$on('search', (scope, query) => {
    vm.currentQuery = query;
    search(query, vm.currentType);
  });

  $scope.$on('selectedType', (scope, type) => {
    vm.currentType = type;
    $rootScope.selectedType = type;
    search(vm.currentQuery, type);
  });

  function search(query, type) {
    spotify
    .search(query, type)
    .then( res => {
      if ( vm.currentType === 'artist' ) {
        vm.artists = res.data.artists.items;
      } else if (vm.currentType === 'album') {
        vm.albums = res.data.albums.items;
      } else {
        vm.tracks = res.data.tracks.items;
      }
    }, 
    err => {
      debugger;
    });
  }

  function saveSpotifyToken() {
    if ( $stateParams.code ) {
      authService.setToken($stateParams.code);
    }
  }

};