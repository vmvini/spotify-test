module.exports = function($scope, spotify, $stateParams, authService, $rootScope, favoriteService, $state) {
  'ngInject';
  const vm = this;
  saveSpotifyToken();
  vm.currentQuery = 'a';
  vm.options = ['artist', 'track', 'album'];
  vm.currentType = vm.options[0];
  $rootScope.selectedType = vm.currentType;
  vm.items = [];

  $scope.$on('toggle.favorites', (scope, showFavorites) => {
    if ( !showFavorites ) {
      search(vm.currentQuery, vm.currentType);
      return;
    }

    const items = favoriteService.getFavorites(vm.currentType);
    vm.items = items;
  });

  $scope.$on('search', (scope, query) => {
    vm.items = [];
    vm.currentQuery = query;
    search(query, vm.currentType);
  });

  $scope.$on('selectedType', (scope, type) => {
    vm.items = [];
    vm.currentType = type;
    $rootScope.selectedType = type;
    search(vm.currentQuery, type);
  });

  function search(query, type) {
    spotify
    .search(query, type)
    .then( res => {
      setResults(res.data);
    }, 
    err => {
      alert('Expired spotify session, try login again');
      $state.go('login');
    });
  }

  function setResults(data) {
    if ( vm.currentType === 'artist' ) {
      vm.items = data.artists.items;
    } else if (vm.currentType === 'album') {
      vm.items = data.albums.items;
    } else {
      vm.items = data.tracks.items;
    }
  }

  function saveSpotifyToken() {
    if ( $stateParams.code ) {
      authService.setToken($stateParams.code);
    }
  }

};