module.exports = function($scope, spotify, $stateParams, authService) {
  'ngInject';
  const vm = this;
  saveSpotifyToken();
  vm.currentQuery = '';
  vm.options = ['artist', 'track', 'album'];
  vm.currentType = vm.options[0];
  vm.artists = [];

  $scope.$on('search', (scope, query) => {
    vm.currentQuery = query;
    search(query, vm.currentType);
  });

  $scope.$on('selectedType', (scope, type) => {
    vm.currentType = type;
    search(vm.currentQuery, type);
  });

  function search(query, type) {
    spotify
    .search(query, type)
    .then( res => {
      if ( vm.currentType === 'artist' ) {
        vm.artists = res.data.artists.items;
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