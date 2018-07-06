module.exports = function($scope) {
  'ngInject';
  const vm = this;
  vm.search = null;

  vm.showPreSearchBar = function() {
    return vm.search == null;
  };

  vm.initiateSearch = function() {
    vm.search = '';
  };

  vm.showSearchBar = function() {
    return vm.search != null;
  };

  vm.endSearch = function() {
    return vm.search = null;
  };

  vm.submit = function() {
    const search = vm.search;
    $scope.$emit('search', search);
  };
  
};