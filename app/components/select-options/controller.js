module.exports = function($scope) {
  'ngInject';
  const vm = this;
  vm.options = $scope.options;
  vm.selectedType = vm.options[0];

  vm.updateSelected = () => {
    $scope.$emit('selectedType', vm.selectedType);
  };

};
