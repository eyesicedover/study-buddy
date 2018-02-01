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

function boxUpdate(targetArray, cardTarget2, checkValidation) {
  cardsArray.forEach(function(card) {
    if (card.number === cardTarget2) {
        card.marked = checkValidation;
        console.log(card);
        return card;
        }
  })

};
function ShowOneCounter(targetArray) {
  this.targetArray = targetArray;
  this.reLoop = targetArray.length - 1;
  this.counter = 1;
}

ShowOneCounter.prototype.getPosition = function(cardMod) {
  var cardPos = this.counter + cardMod;
  if (cardPos > this.reLoop) {
    cardPos = 0;
    this.counter = cardPos;
    } else if (cardPos < 0) {
    cardPos = this.reLoop;
    this.counter = cardPos;
  } else {
    this.counter = cardPos;
  }
  showOne(this.targetArray, this.counter)
  return this.counter;
}
//
// function showOne(targetArray, counter) {
//     var oneCard = targetArray[counter];
//     console.log(oneCard.marked);
//       if (oneCard.marked === true) {
//         var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + oneCard.number + '" checked="checked"/>'
//       } else {
//         var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + oneCard.number + '"/>'
//       }
//       $("#singleCard").empty();
//       $("#singleCard").append('<div class="flipper"><div class="front"><p>' + oneCard.term + '</p></div><div class="back">' + cardMarker + '<p>' + oneCard.definition + '</p></div></div>');
//     };

function showOne(targetArray, counter) {
    var oneCard = targetArray[counter];
    console.log(oneCard);
      if (oneCard.marked === true) {
        var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + oneCard.number + '" checked="checked"/>'
      } else {
        var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + oneCard.number + '"/>'
      }
      $("#singleCard").empty();
      $("#singleCard").append('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front" id ="' + oneCard.number + '"><p id ="' + oneCard.number + '">' + oneCard.term + '</p></div><div class="back" id ="' + oneCard.number + '">' + cardMarker + '<p id ="' + oneCard.number + '">' + oneCard.definition + '</p></div></div></div>');
    };



function showAll(targetArray) {
  cardsArray.forEach(function(card) {
    // console.log(card);
    if (card.marked === true) {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,'+card.number+'" checked="checked"/>'
    } else {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,'+card.number+'"/>'
    }
    $("#cardDisplay").append('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front" id ="' + card.number + '"><p id ="' + card.number + '">' + card.term + '</p></div><div class="back" id ="' + card.number + '">' + cardMarker + '<p id ="' + card.number + '">' + card.definition + '</p></div></div></div>');
  });
};


$(document).ready(function() {

  var newCard = new Card("Computer Science", "JavaScript", "forLoop", "for (i = 0; i < array.length; i++) {console.log(i)}", 1, true);
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "parameter", "a variable that is assigned to an argument", 2, true);
  cardsArray.push(newCard);
  newCard = new Card("Computer Science", "vocabulary", "argument", "what is passed into a function or method", 3, false);
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "constructor", "A blueprint for creating many of the same type objects. Constructors add properties.", 4, true);
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "instance", "Objects created with a constructor are instances of the type defined by the constructor. A constructor can be used to create many instances of the same type.", 5, true);
  cardsArray.push(newCard);

  newCard = new Card("Computer Science", "vocabulary", "prototype", "Prototypes store methods to be shared by all objects of the same type.", 6, true);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "hello", "hola", 7, true);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "goodbye", "adios", 8, true);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Spanish", "Where is the library?", "Donde esta la biblioteca?", 9, false);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "French", "Where is the library?", "Où est la bibliothèque?", 10, true);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Russian", "Where is the library?", "где библиотека?", 11, false);
  cardsArray.push(newCard);

  newCard = new Card("Languages", "Indonesian", "Where is the library?", "Dimana perpustakaannya?", 12, false);
  cardsArray.push(newCard);

  var newCounter = new ShowOneCounter(cardsArray);

  $(".eachCard").click(function() {
    var cardTarget = $(this).attr('id');
    $("#" + cardTarget + "Display").fadeToggle(300, "linear");
    $("#" + cardTarget + "Show").fadeToggle(300, "linear");
  });

  $("#lessOne").click(function(event){
    event.preventDefault();
    var cardMod = -1;
    newCounter.getPosition(cardMod);
  })

  $("#plusOne").click(function(event){
    event.preventDefault();
    var cardMod = +1;
    newCounter.getPosition(cardMod);

  })
  $(":checkbox").click(function() {
    var getId = $(this).attr('id');
    var checkValidation = document.getElementById(getId).checked;
    var splitId = $(this).attr('id').split(",");
    var cardTarget2 = parseInt(splitId[1]);
    console.log(cardTarget2, checkValidation, getId);
    boxUpdate(cardsArray, cardTarget2, checkValidation);
  })


  $("#chooseViewCards").click(function(event){
    event.preventDefault();
    var selector = currentSelections.category;
    console.log(selector);
  })


});
