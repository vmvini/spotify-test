const template = require('!ngtemplate-loader?relativeTo=/app/!html-loader!./../pages/login/template.html');

module.exports = ($stateProvider) => {
  'ngInject';
  
  $stateProvider
  .state({ 
    name: 'login',
    url: '/login',
    templateUrl: template,
    controller: 'LoginController as vm'
  });
};
