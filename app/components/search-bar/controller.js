module.exports = function($scope, $rootScope) {
  'ngInject';
  const vm = this;
  $rootScope.search = '';
  vm.options = $scope.options;
  vm.showFavorites = false;

  vm.submit = function() {
    const search = $rootScope.search;
    $scope.$emit('search', search);
  };
  
  vm.toggleFavorite = function() {
    vm.showFavorites = !vm.showFavorites;
    $scope.$emit('toggle.favorites', vm.showFavorites);
  };

};