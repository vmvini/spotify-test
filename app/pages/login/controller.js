module.exports = function($scope, spotify) {
  'ngInject';
  const vm = this;
   
  vm.login = () => {
    spotify
    .login()
    .then(res => {
    }, err => {
      debugger;
    })
  };

};