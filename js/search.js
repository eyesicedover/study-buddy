function termFinder(cardsArray, termSearch) {
  for (var i = 0; i < cardsArray.length; i++){
    var searchArray = [];
    if (cardsArray[i].term === termSearch) {
      searchArray.push(cardsArray[i]);
    }
  }
  return searchArray;
}
