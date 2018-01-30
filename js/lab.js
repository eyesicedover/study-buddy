var cardsArray = [];

function Subject(name) {
  this.name = name;
  this.categories = [];
}

function Category(name) {
  this.name = name;
}

function Card(subject, category, term, definition, marked) {
  this.subject = subject;
  this.category = category;
  this.term = term;
  this.definition = definition;
  this.marked = marked;
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

// Card.prototype.markCheck = function(){
//
// }
function showAll(cardsArray) {
  cardsArray.forEach(function(card) {
    $("#cardDisplay").append('<div class="eachCard" id="'+card.term+'" ><div class = "cardFront" id="' + card.term + 'Display">' + card.term + '</div><div class= "cardBack" id="' + card.term + 'Show"> <div class="cardMarker"><input type="checkbox" name="marked" value="marked" id="checkMark"/></div>' + card.definition + '</div></div>');
  })
};

$(document).ready(function() {

  // var searchArray = [];

  var newCard = new Card("Computer Science", "JavaScript", "forLoop", "for (i = 0; i < array.length; i++) {console.log(i)}");
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "parameter", "a variable that is assigned to an argument");
  cardsArray.push(newCard);
  newCard = new Card("Computer Science", "vocabulary", "argument", "what is passed into a function or method");
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "constructor", "A blueprint for creating many of the same type objects. Constructors add properties.");
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "instance", "Objects created with a constructor are instances of the type defined by the constructor. A constructor can be used to create many instances of the same type.");
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "prototype", "Prototypes store methods to be shared by all objects of the same type.");
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "hello", "hola");
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "goodbye", "adios");
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "Where is the library?", "Donde esta la biblioteca?");
  cardsArray.push(newCard);

  newCard = new Card("Languages", "French", "Where is the library?", "Où est la bibliothèque?");
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Russian", "Where is the library?", "где библиотека?");
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Indonesian", "Where is the library?", "Dimana perpustakaannya?");
  cardsArray.push(newCard);


  // $("form#").submit(function(event) {
  //   event.preventDefault();
  //
  //   subject, category, term, definition
  //
  //   var subject = $("").val();
  //   var category = $("").val();
  //   var term = $("").val();
  //   var definition = $("").val();

  // newCard = new Card(subject, category, term, definition);

  cardsArray.push(newCard);
  showAll(cardsArray);


  // $(".eachCard").click(function() {
  //   var cardTarget = $(this).attr('id');
  //   $("#" + cardTarget + "Display").fadeOut(300, "swing");
  //   $("#" + cardTarget + "Show").delay(301).fadeIn(299, "swing");
  //   console.log(cardTarget);
  //
  // });


  $(".eachCard").click(function() {
    var cardTarget = $(this).attr('id');
    $("#" + cardTarget + "Display").fadeToggle(300, "linear");
    $("#" + cardTarget + "Show").fadeToggle(300, "linear");

  });

  // $(".eachCard").click(function() {
  //   var cardTarget2 = $(this).attr('id').replace("Show", "");
  //
  //   $("#" + cardTarget2 + "Show").fadeToggle(300, 0)
  //   $("#" + cardTarget2 + "Display").fadeToggle(300, "swing");
  // });


  // $(this).fadeOut(300, "swing");
  // $(this).delay(301).toggleClass().fadeIn(300, "swing");


  $("button").click(function() {

  })
});

// });
