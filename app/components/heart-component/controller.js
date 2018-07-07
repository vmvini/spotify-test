module.exports = function($scope, favoriteService, $rootScope) {
  'ngInject';
  
  const vm = this;
  const id = $scope.id;
  const data = $scope.data;
  const type = $scope.type;
  vm.isMarked = favoriteService.isMarked(id);

  vm.favorite = ($event) => {
    if ( favoriteService.isMarked(id) ) {
      favoriteService.unMark(id);
      vm.isMarked = false;
    } else {
      favoriteService.mark(id, data, type);
      vm.isMarked = true;
    }
    $event.stopPropagation();
  };
    
};