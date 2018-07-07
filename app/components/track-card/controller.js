const NO_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

module.exports = function($scope) {
  'ngInject';
  
  const vm = this;
  
  vm.rawTrack = $scope.track;
  vm.track = processTrackData($scope.track);
 
  function processTrackData(track) {
    return {
      image: track.album.images.length > 0 ? track.album.images[0].url : NO_IMG_URL, 
      name: track.name, 
      artist: track.artists.map( a => a.name ).join(', '), 
      albumName: track.album.name, 
      duration: toMinutes(track.duration_ms), 
      id: track.id
    }
  }

  function toMinutes(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  

    
};