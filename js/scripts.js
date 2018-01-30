function Subject (name) {
  this.name = name;
  this.categories = [];
}

function Category (name) {
  this.name = name;
}

function Card (subject, category, term, definition) {
  this.subject = subject;
  this.category = category;
  this.term = term;
  this.definition = definition;
}



// function petTypeSort(petsArray, searchArray) {
//   var sortedArray = [];
//   for (var i = 0; i < petsArray.length; i++) {
//     for (var j = 0; j < searchArray.length; j++) {
//       if (petsArray[i].type === searchArray[j]) {
//         sortedArray.push(petsArray[i]);
//       }
//     }
//   }
//   return sortedArray;
// }
//
// function petSizeSort(petsArray, searchArray) {
//   var sortedArray = [];
//   for (var i = 0; i < petsArray.length; i++) {
//     for (var j = 0; j < searchArray.length; j++) {
//       if (petsArray[i].size === searchArray[j]) {
//         sortedArray.push(petsArray[i]);
//       }
//     }
//   }
//   return sortedArray;
// }
//
// function petHeartedSort(petsArray) {
//   var sortedArray = [];
//   for (var i = 0; i < petsArray.length; i++) {
//     if (petsArray[i].heart === true) {
//       sortedArray.push(petsArray[i]);
//   }
//   return sortedArray;
// }
//
// function petAdoptedSort(petsArray) {
//   var sortedArray = [];
//   for (var i = 0; i < petsArray.length; i++) {
//     if (petsArray[i].adopted === true) {
//       sortedArray.push(petsArray[i]);
//   }
//   return sortedArray;
// }
//
// function petNotAdoptedSort(petsArray) {
//   var sortedArray = [];
//   for (var i = 0; i < petsArray.length; i++) {
//     if (petsArray[i].adopted === false) {
//       sortedArray.push(petsArray[i]);
//   }
//   return sortedArray;
// }
//
// function petArrayFilter(array1, array2) {
//   var filteredArray = [];
//   for (var i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       filteredArray.push(array1[i]);
//     }
//   }
//   return filteredArray;
// }




$(document).ready(function() {
  var cardsArray = [];
  // var searchArray = [];

  var newCard = new Card("Computer Science", "JavaScript", "forLoop", "for (i = 0; i < array.length; i++) {console.log(i)}");
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "parameter", "a variable that is assigned to an argument");

  newCard = new Card("Computer Science", "vocabulary", "argument", "what is passed into a function or method");

  newCard = new Card("Computer Science", "vocabulary", "constructor", "A blueprint for creating many of the same type objects. Constructors add properties.");

  newCard = new Card("Computer Science", "vocabulary", "instance", "Objects created with a constructor are instances of the type defined by the constructor. A constructor can be used to create many instances of the same type.");

  newCard = new Card("Computer Science", "vocabulary", "prototype", "Prototypes store methods to be shared by all objects of the same type.");

  newCard = new Card("Languages", "Spanish", "hello", "hola");

  newCard = new Card("Languages", "Spanish", "goodbye", "adios");

  newCard = new Card("Languages", "Spanish", "Where is the library?", "Donde esta la biblioteca?");

  newCard = new Card("Languages", "French", "Where is the library?", "Où est la bibliothèque?");

  newCard = new Card("Languages", "Russian", "Where is the library?", "где библиотека?");

  newCard = new Card("Languages", "Indonesian", "Where is the library?", "Dimana perpustakaannya?");


  $("form#").submit(function(event) {
    event.preventDefault();

    subject, category, term, definition

    var subject = $("").val();
    var category = $("").val();
    var term = $("").val();
    var definition = $("").val();

    newCard = new Card(subject, category, term, definition);
    cardsArray.push(newCard);

    $("button").click(function() {

    })
  });

});
