module.exports = function($scope) {
  'ngInject';
  const vm = this;
  vm.search = '';
  vm.options = $scope.options;
  vm.showFavorites = false;

  vm.submit = function() {
    const search = vm.search;
    $scope.$emit('search', search);
  };
  
  vm.toggleFavorite = function() {
    vm.showFavorites = !vm.showFavorites;
    $scope.$emit('toggle.favorites', vm.showFavorites);
  };

};