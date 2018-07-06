const template = require('!ngtemplate-loader?relativeTo=/app/!html-loader!./../pages/list/template.html');

module.exports = ($stateProvider) => {
  'ngInject';
  
  $stateProvider
  .state({ 
    name: 'list',
    url: '/list/{code}',
    templateUrl: template,
    controller: 'StartPageController as vm'
  });
};

