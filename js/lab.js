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

function boxUpdate(cardsArray, cardTarget2, checkValidation) {
  cardsArray.forEach(function(card) {
    if (card.number === cardTarget2) {
      card.marked = checkValidation;
      console.log(card);
      return card;
    }
  })
};

function ShowOneCounter(selector) {
  this.selector = selector;
  this.array = [];
  this.counter = 0;
  this.reLoop = 0;
}

ShowOneCounter.prototype.getArray = function() {
  for (var x = 0; x < cardsArray.length; x++) {
    if (cardsArray[x].category === this.selector) {
      this.array.push(cardsArray[x]);
    }
  }
  this.reLoop = this.array.length - 1;
  console.log(this.array, this.reLoop);
  return this.array, this.reLoop;
}

ShowOneCounter.prototype.getPosition = function(cardMod) {
  console.log(this.reLoop);
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
  console.log(this.array);
  showOne(this.counter, this.array)
  return this.counter;
}

function showOne(counter, array) {
  console.log(counter, array);
  var oneCard = array[counter];
  console.log(counter, array, oneCard);
  if (oneCard.marked === true) {
    var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + oneCard.number + '" checked="checked"/>'
  } else {
    var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + oneCard.number + '"/>'
  }
  $(".singleCardDisplay").empty();
  $(".singleCardDisplay").append('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front" id ="' + oneCard.number + '"><p id ="' + oneCard.number + '">' + oneCard.term + '</p></div><div class="back" id ="' + oneCard.number + '">' + cardMarker + '<p id ="' + oneCard.number + '">' + oneCard.definition + '</p></div></div></div>');
};

function showAll(selector) {
  cardsArray.forEach(function(card) {
    if (card.category !== selector) {
      return;
    } else if (card.marked === true) {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + card.number + '" checked="checked"/>'
    } else {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + card.number + '"/>'
    }
    $(".displayCard").append('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front" id ="' + card.number + '"><p id ="' + card.number + '">' + card.term + '</p></div><div class="back" id ="' + card.number + '">' + cardMarker + '<p id ="' + card.number + '">' + card.definition + '</p></div></div></div>');
  });
};

$(document).ready(function() {

  $(":checkbox").click(function() {
    var getId = $(this).attr('id');
    var checkValidation = document.getElementById(getId).checked;
    var splitId = $(this).attr('id').split(",");
    var cardTarget2 = parseInt(splitId[1]);
    boxUpdate(cardsArray, cardTarget2, checkValidation);
  })

  $("#chooseViewCards").click(function(event) {
    event.preventDefault();
    var selector = currentSelections.category;
    showAll(selector);
  })

  $("#chooseViewSlider").click(function(event) {
    event.preventDefault();
    var selector = currentSelections.category;
    var newCounter = new ShowOneCounter(selector);
    newCounter.getArray();
    console.log(newCounter.counter, newCounter.array);
    showOne(newCounter.counter, newCounter.array)

    $("#lessOne").click(function(event) {
      event.preventDefault();
      var cardMod = -1;
      newCounter.getPosition(cardMod, newCounter.array);
    })

    $("#plusOne").click(function(event) {
      event.preventDefault();
      var cardMod = +1;
      newCounter.getPosition(cardMod, newCounter.array);

    })
  });


});
