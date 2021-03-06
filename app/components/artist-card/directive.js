const template = require('!ngtemplate-loader?relativeTo=/app/!html-loader!./template.html');
const controller = require('./controller.js');

module.exports = function() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: template,
    link: link,
    scope: {
      artist: '<'
    }, 
    controller: controller,
    controllerAs: 'vm'
  };

  function link(scope, element, attrs) {
  
  }

};