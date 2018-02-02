var currentSelections = new CurrentSelections;
var number = 0;
var cardsArray = [];
var subjectArray = [];

function Subject(name) {
  this.name = name;
  this.categories = [];
}

function Category(name) {
  this.name = name;
}

function Card(subject, category, term, definition, number) {
  this.subject = subject;
  this.category = category;
  this.term = term;
  this.definition = definition;
  this.number = number;
  this.marked = false;
}

function CurrentSelections() {
  this.subject = "";
  this.category = "";
}

//checkbox validator
function boxUpdate(cardsArray, cardTarget2, checkValidation) {
  cardsArray.forEach(function(card) {
    if (card.number === cardTarget2) {
      card.marked = checkValidation;
      return card;
    }
  })
};

//counter for card slider
function ShowOneCounter(selector) {
  this.selector = selector;
  this.array = [];
  this.counter = 0;
  this.reLoop = 0;
}

//gets the array for slider
ShowOneCounter.prototype.getArray = function() {
  for (var x = 0; x < cardsArray.length; x++) {
    if (cardsArray[x].category === this.selector) {
      this.array.push(cardsArray[x]);
    }
  }
  this.reLoop = this.array.length - 1;
  return this.array, this.reLoop;
}

//tracks slider position
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
  showOne(this.counter, this.array)
  return this.counter;
}

//slider function
function showOne(counter, array) {
  var oneCard = array[counter];
  if (oneCard.marked === true) {
    var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + oneCard.number + '" checked="checked"/>'
  } else {
    var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + oneCard.number + '"/>'
  }
  $(".singleCardDisplay").empty();
  $(".singleCardDisplay").append('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front" id ="' + oneCard.number + '"><p id ="' + oneCard.number + '">' + oneCard.term + '</p></div><div class="back" id ="' + oneCard.number + '">' + cardMarker + '<p id ="' + oneCard.number + '">' + oneCard.definition + '</p></div></div></div>');
};

function makeCard() {
  var subject = currentSelections.getSubject();
  var category = currentSelections.getCategory();
  var term = $("input#term").val();
  var definition = $("input#definition").val();
  number += 1;
  if (term === "" || definition === "") {
    alert("Please fill in all fields.");
  } else {
    var newCard = new Card(subject, category, term, definition, number);
    cardsArray.push(newCard);
    $(".makeCard").hide();
    $("form#makeCardForm").trigger("reset");
    $(".displayCard").empty();
    $(".displayCard").show();
    var filteredArray = filterForCurrentSelections();
    showAll(filteredArray);
    return newCard;
  }
}

function selectSubject(subject) {
  currentSelections.setSubject(subject);
  currentSelections.setCategory("");
  $(".displayCard").empty();
  $(".displayCard").hide();
  $(".makeCard").hide();
  $(".makeCategory").hide();
  $("li").removeClass("active");
  $("#chooseViewCards").hide();
  $("#makeOrViewCard").hide();
  $(".subject").hide();
  $("#chooseMakeCategory").show();
  $(".subject-btn").removeClass("activeSubject");
  $("." + subject).show();
  $(".currentSubject").text(subject);
}

function selectCategory(category) {
  currentSelections.setCategory(category);
  var subject = currentSelections.getSubject();
  $(".displayCard").empty();
  $(".displayCard").hide();
  $(".subject").hide();
  $(".makeCategory").hide();
  $("." + subject).show();
  $("." + category + "Deck").show();
  $("li").removeClass("active");
  $("#makeCardForm").show();
  $("#chooseViewCards").show();
  $("#makeOrViewCard").show();
  $(".currentCategory").text(category);
}

function filterForCurrentSelections() {
  var filteredArray = [];
  var subject = currentSelections.getSubject();
  var category = currentSelections.getCategory();
  cardsArray.forEach(function(card) {
    if (card.subject === subject && card.category === category) {
      filteredArray.push(card);
    }
  });
  return filteredArray;
}

function displayCurrentSelections(viewType) {
  $(".displayCard").empty();
  $(".displayCard").hide();
  $(".makeCard").hide();
  $(".makeCategory").hide();
  var filteredArray = filterForCurrentSelections();
  if (filteredArray.length === 0) {
    $(".displayCard").html("<h3>No cards here!</h3>")
  } else if (viewType === "group") {
    showAll(filteredArray);
    $(".displaySingleCard").hide();
    $(".displayCard").show();
  } else if (viewType === "slider") {
    showAll(filteredArray);
    $(".displayCard").hide();
    $(".displaySingleCard").show();
  }
}

function search(searchTerm) {
  var searchArray = [];
  for (var i = 0; i < cardsArray.length; i++) {
    if ((cardsArray[i].term.toLowerCase().includes(searchTerm.toLowerCase())) || (cardsArray[i].definition.toLowerCase().includes(searchTerm.toLowerCase()))) {
      searchArray.push(cardsArray[i]);
    }
  }
  return searchArray;
}

function displaySearchResults(searchTerm) {
  $(".displayCard").empty();
  var filteredArray = search(searchTerm);
  if (filteredArray.length === 0) {
    $(".displayCard").html("<h3>No cards match!</h3>")
  } else {
    showAll(filteredArray);
  }
  $(".displayCard").show();
}

function createCategory() {
  var category = $("input#newCategory").val();
  var subject = currentSelections.getSubject();
  if (redundancyCheck(subject, category) === false) {
    $("." + subject + " ul").append("<li id='" + category + "'>" + category + "</li>");
    var newCategory = new Category(category);
    for (var i = 0; i < subjectArray.length; i++) {
      if (subjectArray[i].name === subject) {
        subjectArray[i].categories.push(newCategory);
        $(".makeCategory").hide();
        $(".displaySingleCard").hide();
        $("form#makeCategoryForm").trigger("reset");
      }
    }
  } else {
    alert("Category already exists");
    $("form#makeCategoryForm").trigger("reset");
  }
}

function redundancyCheck(subject, category) {
  var existing = false;
  for (var index = 0; index < subjectArray.length; index++) {
    var forStop = subjectArray[index].categories.length;
    for (var j = 0; j < forStop; j++) {
      if ((subject.toLowerCase() === subjectArray[index].name.toLowerCase()) && (category.toLowerCase() === subjectArray[index].categories[j].name.toLowerCase())) {
        existing = true;
        return existing;
      }
    }
  }
  return existing;
}

function showAll(cardsArray) {
  cardsArray.forEach(function(card) {
    if (card.marked === true) {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + card.number + '" checked="checked"/>'
    } else {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,' + card.number + '"/>'
    }
    $(".displayCard").append('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front" id ="' + card.number + '"><p id ="' + card.number + '">' + card.term + '</p></div><div class="back" id ="' + card.number + '">' + cardMarker + '<p id ="' + card.number + '">' + card.definition + '</p></div></div></div>');
  });
};

CurrentSelections.prototype.setSubject = function(subject) {
  currentSelections.subject = subject;
}

CurrentSelections.prototype.getSubject = function(subject) {
  return currentSelections.subject;
}

CurrentSelections.prototype.setCategory = function(category) {
  currentSelections.category = category;
}

CurrentSelections.prototype.getCategory = function(category) {
  return currentSelections.category;
}

Subject.prototype.addCategory = function(category) {
  if (this.categories.includes(category) === false) {
    this.categories.push(category);
  }
  return Subject;
}

// cards
function makeCards() {
  var newCard = new Card("computerScience", "JavaScript", "forLoop", "for (i = 0; i < array.length; i++) {console.log(i)}", 1, false);
  cardsArray.push(newCard);
  newCard = new Card("computerScience", "JavaScript", "parameter", "a variable that is assigned to an argument", 2, true);
  cardsArray.push(newCard);
  newCard = new Card("computerScience", "JavaScript", "argument", "what is passed into a function or method", 3, true);
  cardsArray.push(newCard);
  newCard = new Card("computerScience", "JavaScript", "constructor", "A blueprint for creating many of the same type objects. Constructors add properties.", 4, true);
  cardsArray.push(newCard);
  newCard = new Card("computerScience", "JavaScript", "instance", "Objects created with a constructor are instances of the type defined by the constructor. A constructor can be used to create many instances of the same type.", 5, false);
  cardsArray.push(newCard);
  newCard = new Card("computerScience", "JavaScript", "prototype", "Prototypes store methods to be shared by all objects of the same type.", 6, false);
  cardsArray.push(newCard);
  newCard = new Card("computerScience", "Ruby", "while statement", "while conditional [do] code end", 7, true);
  cardsArray.push(newCard);
  newCard = new Card("computerScience", "C Sharp", "using keyword", "The using keyword is used for including the namespaces in the program. A program can include multiple using statements.", 8, true);
  cardsArray.push(newCard);
  newCard = new Card("computerScience", "Dot Net", "CLR", "common language runtime - a virtual execution system", 9, false);
  cardsArray.push(newCard);
  newCard = new Card("mathematics", "Calculus", "Absolute Convergence", "Describes a series that converges when all terms are replaced by their absolute values. To see if a series converges absolutely, replace any subtraction in the series with addition. If the new series converges, then the original series converges absolutely.", 10, true);
  cardsArray.push(newCard);
  newCard = new Card("mathematics", "Algebra", "Compound Fraction", "A fraction which has, as part of its numerator and/or denominator, at least one other fraction.", 11, false);
  cardsArray.push(newCard);
  newCard = new Card("mathematics", "Geometry", "Polygon", "A closed plane figure for which all sides are line segments. The name of a polygon describes the number of sides. A polygon which has all sides mutually congruent and all angles mutually congruent is called a regular polygon.", 12, true);
  cardsArray.push(newCard);
  newCard = new Card("languages", "Spanish", "hello", "hola", 13, false);
  cardsArray.push(newCard);
  newCard = new Card("languages", "Spanish", "goodbye", "adios", 14, true);
  cardsArray.push(newCard);
  newCard = new Card("languages", "Spanish", "Where is the library?", "Donde esta la biblioteca?", 15, false);
  cardsArray.push(newCard);
  newCard = new Card("languages", "French", "Where is the library?", "Où est la bibliothèque?", 16, true);
  cardsArray.push(newCard);
  newCard = new Card("languages", "Russian", "Where is the library?", "где библиотека?", 17, false);
  cardsArray.push(newCard);
  newCard = new Card("languages", "Indonesian", "Where is the library?", "Dimana perpustakaannya?", 18, false);
  cardsArray.push(newCard);
}

function makeSubjectsAndCategories() {
  var newSubject = new Subject("computerScience");
  var newCategory = new Category("Ruby");
  newSubject.categories.push(newCategory);
  newCategory = new Category("JavaScript");
  newSubject.categories.push(newCategory);
  newCategory = new Category("C Sharp");
  newSubject.categories.push(newCategory);
  newCategory = new Category("Dot Net");
  newSubject.categories.push(newCategory);
  subjectArray.push(newSubject);

  newSubject = new Subject("languages");
  newCategory = new Category("Spanish");
  newSubject.categories.push(newCategory);
  newCategory = new Category("French");
  newSubject.categories.push(newCategory);
  newCategory = new Category("Russian");
  newSubject.categories.push(newCategory);
  newCategory = new Category("Indonesian");
  newSubject.categories.push(newCategory);
  subjectArray.push(newSubject);

  newSubject = new Subject("mathematics");
  newCategory = new Category("Calculus");
  newSubject.categories.push(newCategory);
  newCategory = new Category("Algebra");
  newSubject.categories.push(newCategory);
  newCategory = new Category("Geometry");
  newSubject.categories.push(newCategory);
  subjectArray.push(newSubject);
}

$(document).ready(function() {
  // cards
  makeCards();

  // subjects and categories
  makeSubjectsAndCategories();

  //check for checkbox status
  $("*checkbox").click(function() {
    var getId = $(this).attr('id');
    var checkValidation = document.getElementById(getId).checked;
    var splitId = $(this).attr('id').split(",");
    var cardTarget2 = parseInt(splitId[1]);
    boxUpdate(cardsArray, cardTarget2, checkValidation);
  })

  //displays selcted category of cards in the slider
  $("#chooseViewSlider").click(function(event) {
    event.preventDefault();
    var selector = currentSelections.category;
    var newCounter = new ShowOneCounter(selector);
    newCounter.getArray();
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

  // search button
  $("#typeInput").submit(function(event) {
    event.preventDefault();
    var searchTerm = $("input#userTermSearch").val();
    displaySearchResults(searchTerm);
  });

  // subjects
  $(".subject-btn").click(function() {
    var subject = $(this).val();
    selectSubject(subject);
    $(this).addClass("activeSubject");
  });

  // categories
  $('.allCategories').on('click', 'li', function() {
    var category = $(this).text();
    selectCategory(category);
    $(this).addClass("active");
  });

  // display add card form
  $("#chooseMakeCard").click(function() {
    $(".makeCard").show();
    $(".makeCategory").hide();
  });

  // displays all cards with current subject and category
  $("#chooseViewCards").click(function() {
    displayCurrentSelections("group");
  });

  // displays all cards in slider with current subject and category
  $("#chooseViewSlider").click(function() {
    displayCurrentSelections("slider");
  });

  // make a new card
  $("form#makeCardForm").submit(function(event) {
    event.preventDefault();
    var newCard = makeCard();
  });

  // display make category form
  $("#chooseMakeCategory").click(function() {
    $(".makeCategory").show();
  });

  // make a new category
  $("form#makeCategoryForm").submit(function(event) {
    event.preventDefault();
    createCategory();
  });
});
