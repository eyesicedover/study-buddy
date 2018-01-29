function Pet(name, age, type, size, image, description) {
  this.name = name;
  this.age = age;
  this.type = type;
  this.size = size;
  this.image = image;
  this.description = description;
  this.heart = false;
  this.adopted = false;
}

// function(petsArray, searchArray) {
//   if (this.type = true) {
//     var typeArray = petTypeSort(petsArray, searchArray);
//   } else if
//
// }

function petTypeSort(petsArray, searchArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    for (var j = 0; j < searchArray.length; j++) {
      if (petsArray[i].type === searchArray[j]) {
        sortedArray.push(petsArray[i]);
      }
    }
  }
  return sortedArray;
}

function petSizeSort(petsArray, searchArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    for (var j = 0; j < searchArray.length; j++) {
      if (petsArray[i].size === searchArray[j]) {
        sortedArray.push(petsArray[i]);
      }
    }
  }
  return sortedArray;
}

function petHeartedSort(petsArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    if (petsArray[i].heart === true) {
      sortedArray.push(petsArray[i]);
  }
  return sortedArray;
}

function petAdoptedSort(petsArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    if (petsArray[i].adopted === true) {
      sortedArray.push(petsArray[i]);
  }
  return sortedArray;
}

function petNotAdoptedSort(petsArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    if (petsArray[i].adopted === false) {
      sortedArray.push(petsArray[i]);
  }
  return sortedArray;
}

function petArrayFilter(array1, array2) {
  var filteredArray = [];
  for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      filteredArray.push(array1[i]);
    }
  }
  return filteredArray;
}




$(document).ready(function() {
  var petsArray = [];
  var searchArray = [];
  var newPet = new Pet("Charlie", 0, "dog", "small", "http://on.natgeo.com/2DIRVbC", "The most adorable puppy on this Earth, I love him");
  petsArray.push(newPet);

  newPet = new Pet("Sassy", 4, "cat", "small", "http://bit.ly/2BBHggU", "A sweet gal who loves sitting in sunbeams");
  petsArray.push(newPet);

  newPet = new Pet("Coco", 18, "bird", "medium", "http://bit.ly/2BD5TtF", "A fiesty parrot; he loves to blow kisses and says hello when you come home");
  petsArray.push(newPet);


  $("form#").submit(function(event) {
    event.preventDefault();

    var name = $("").val();
    var age = $("").val();
    var type = $("").val();
    var size = $("").val();
    var image = $("").val();
    var description = $("").val();ß

    newPet = new Pet(name, age, type, size, image, description);
    petsArray.push(newPet);

    $("button").click(function() {

    })
  });

});
