const url = 'https://api.spotify.com/v1/search';

module.exports = ($http, $q) => {
  'ngInject';
  
  return {
    search: search
  };

  function search(query, type) {
    return $http({
      url: url, 
      method: "GET", 
      params: {
        q: query, 
        type: type
      }
    });
  }

};