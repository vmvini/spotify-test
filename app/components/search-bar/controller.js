module.exports = function($scope) {
  'ngInject';
  const vm = this;
  vm.options = $scope.options;
  vm.showFavorites = false;
  vm.search = '';

  vm.submit = function() {
    $scope.$emit('search', vm.search);
  };
  
  vm.toggleFavorite = function() {
    vm.showFavorites = !vm.showFavorites;
    $scope.$emit('toggle.favorites', vm.showFavorites);
  };

  $scope.$on('selectedType', (scope, type) => {
    $scope.$emit('updateTerms', {
      type: type, 
      search: vm.search
    });
  });

};