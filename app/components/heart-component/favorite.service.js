module.exports = function() {
  'ngInject';
  
  return {
    mark: mark, 
    isMarked: isMarked, 
    unMark: unMark
  };
  
  function mark(id) {
    localStorage.setItem(id, true);
  }

  function unMark(id) {
    localStorage.setItem(id, false);
  }

  function isMarked(id) {
    const value = localStorage.getItem(id);
    if ( value !== undefined && value !== null ) {
      if ( value === 'true' ) return true;
    }
    return false;
  }
    
};