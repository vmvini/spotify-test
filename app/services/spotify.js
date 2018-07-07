const url = 'https://api.spotify.com/v1/search';

module.exports = ($http, $q) => {
  'ngInject';
  
  return {
    search: search,
    artistAlbums: artistAlbums,
    getAllTracks: getAllTracks
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

  function artistAlbums(artistId) {
    return $http({
      url: `https://api.spotify.com/v1/artists/${artistId}/albums`,
      method: 'GET', 
      params: {
        limit: 5
      }
    });
  }

  function getAllTracks(albumId) {
    return $http({
      url: `https://api.spotify.com/v1/albums/${albumId}/tracks`,
      method: 'GET', 
      params: {
      }
    });
  }

};