const NO_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

module.exports = function($scope) {
  'ngInject';
  
  const vm = this;
  vm.url = $scope.url;
  vm.id = $scope.id;
  vm.title = $scope.title;
  vm.data = $scope.data;

  vm.showDetails = () =>  {
    $scope.$emit('show.details');
  };
    
};