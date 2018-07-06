module.exports = function($http) {
  'ngInject';

  return {
    setToken: setToken
  };

  function setToken(token) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + token;
    localStorage.setItem('token', token);
  }
  
};