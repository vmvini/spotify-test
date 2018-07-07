module.exports = function() {
  'ngInject';

  const itemsKey = 'favorited_items';

  return {
    mark: mark, 
    isMarked: isMarked, 
    unMark: unMark, 
    getFavorites: getFavorites
  };

  function getFavorites(type) {
    const items = getItems();
    return items.filter( i => i.data.dataType === type ).map( i => i.data );
  }

  function getItems() {
    const items = localStorage.getItem(itemsKey);
    if ( items !== undefined && items !== null ) {
      return JSON.parse(items);
    }
    return [];
  }

  function setItems(items) {
    localStorage.setItem(itemsKey, JSON.stringify(items) );
  }
  
  function mark(id, data) {
    const items = getItems();
    items.push({
      id: id, 
      data: data
    });
    setItems(items);
  }

  function unMark(id) {
    const items = getItems().filter( i => i.id !== id );
    setItems(items);
  }

  function isMarked(id) {
    const items = getItems();
    const result = items.filter(i => i.id === id );
    return result.length > 0;
  }
    
};