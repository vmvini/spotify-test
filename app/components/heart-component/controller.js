module.exports = function($scope, favoriteService) {
  'ngInject';
  
  const vm = this;
  const id = $scope.id;
  vm.isMarked = favoriteService.isMarked(id);

  vm.favorite = ($event) => {
    if ( favoriteService.isMarked(id) ) {
      favoriteService.unMark(id);
      vm.isMarked = false;
    } else {
      favoriteService.mark(id);
      vm.isMarked = true;
    }
    $event.stopPropagation();
  };
    
};