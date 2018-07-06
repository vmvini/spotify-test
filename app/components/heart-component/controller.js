module.exports = function($scope, favoriteService, $rootScope) {
  'ngInject';
  
  const vm = this;
  const id = $scope.id;
  const data = $scope.data;
  vm.isMarked = favoriteService.isMarked(id);

  vm.favorite = ($event) => {
    if ( favoriteService.isMarked(id) ) {
      favoriteService.unMark(id);
      vm.isMarked = false;
    } else {
      data.dataType = $rootScope.selectedType;
      favoriteService.mark(id, data);
      vm.isMarked = true;
    }
    $event.stopPropagation();
  };
    
};