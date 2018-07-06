const template = require('!ngtemplate-loader?relativeTo=/app/!html-loader!./template.html');
const controller = require('./controller.js');

module.exports = function() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: template,
    scope: {
      options: '<'
    }, 
    controller: controller,
    controllerAs: 'vm',
    link: link
  };

  function link(scope, element, attrs) {
  }

};