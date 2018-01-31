var cardsArray = [];
var number = 0;


function Subject(name) {
  this.name = name;
  this.categories = [];
}

function Category(name) {
  this.name = name;
}

function Card(subject, category, term, definition, number, marked) {
  this.subject = subject;
  this.category = category;
  this.term = term;
  this.definition = definition;
  this.number = number;
  this.marked = marked;
}

function boxUpdate(cardsArray, cardTarget2) {
  cardsArray.forEach(function(card) {
    if (card.number === cardTarget2) {
      console.log(card);
    }
  })
};
// function showAll(cardsArray) {
// cardsArray.forEach(function(card) {
//   console.log(card.marked, card)
//   if (card.marked === true){
//     var cardMarker = '<div class="cardMarker"><input type="checkbox" name="marked" value="marked" id="checkMark" checked="checked"/>'
//   }else {
//       var cardMarker = '<div class="cardMarker"><input type="checkbox" name="marked" value="marked" id="checkMark"/>'
//     }
//   $("#cardDisplay").append('<div class="eachCard" id="'+card.term+'" ><div class = "cardFront" id="' + card.term + 'Display">' + card.term + '</div><div class= "cardBack" id="' + card.term + 'Show">'+cardMarker+'</div>' + card.definition + '</div></div>');
// })

function showAll(cardsArray) {
  cardsArray.forEach(function(card) {
    // console.log(card);
    if (card.marked === true) {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="checkMark" checked="checked"/>'
    } else {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="checkMark"/>'
    }
    $("#cardDisplay").append('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front" id ="' + card.number + '"><p id ="' + card.number + '">' + card.term + '</p></div><div class="back" id ="' + card.number + '">' + cardMarker + '<p id ="' + card.number + '">' + card.definition + '</p></div></div></div>');
  })
};




$(document).ready(function() {

  var newCard = new Card("Computer Science", "JavaScript", "forLoop", "for (i = 0; i < array.length; i++) {console.log(i)}", 1);
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "parameter", "a variable that is assigned to an argument", 2, true);
  cardsArray.push(newCard);
  newCard = new Card("Computer Science", "vocabulary", "argument", "what is passed into a function or method", 3);
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "constructor", "A blueprint for creating many of the same type objects. Constructors add properties.", 4);
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "instance", "Objects created with a constructor are instances of the type defined by the constructor. A constructor can be used to create many instances of the same type.", 5, true);
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "prototype", "Prototypes store methods to be shared by all objects of the same type.", 6, true);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "hello", "hola", 7);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "goodbye", "adios", 8);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "Where is the library?", "Donde esta la biblioteca?", 9);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "French", "Where is the library?", "Où est la bibliothèque?", 10, true);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Russian", "Where is the library?", "где библиотека?", 11);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Indonesian", "Where is the library?", "Dimana perpustakaannya?", 12);
  cardsArray.push(newCard);

  showAll(cardsArray);

  $(".eachCard").click(function() {
    var cardTarget = $(this).attr('id');
    $("#" + cardTarget + "Display").fadeToggle(300, "linear");
    $("#" + cardTarget + "Show").fadeToggle(300, "linear");
  });

  $(".back").click(function() {
    var getId = $(this).attr('id');
    var cardTarget2 = parseInt(getId);
    boxUpdate(cardsArray, cardTarget2);
    console.log("click", cardTarget2, typeof cardTarget2);
  })
});
