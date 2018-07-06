module.exports = function($q) {
  'ngInject';
  return {
    request: function(config) {
      config.headers = config.headers || {};
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      return config;
    },
    response: function(response) {
      return response || $q.when(response);
    },
    responseError: function(rejection) {
      debugger;
    }
  };
};