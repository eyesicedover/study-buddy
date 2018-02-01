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

function Card(subject, category, term, definition, number, marked) {
  this.subject = subject;
  this.category = category;
  this.term = term;
  this.definition = definition;
  this.number = number;
  this.marked = marked;
}

function CurrentSelections() {
  this.subject = "";
  this.category = "";
}

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
  $("li").removeClass("active");
  $("#chooseViewCards").hide();
  $("#makeOrViewCard").hide();
  $(".subject").hide();
  $("." + subject).show();
  $(".currentSubject").text(subject);
}

function selectCategory(category) {
  currentSelections.setCategory(category);
  var subject = currentSelections.getSubject();
  $(".displayCard").empty();
  $(".displayCard").hide();
  $(".subject").hide();
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

function displayCurrentSelections() {
  $(".displayCard").empty();
  $(".displayCard").hide();
  $(".makeCard").hide();
  var filteredArray = filterForCurrentSelections();
  showAll(filteredArray);
  $(".displayCard").show();
}

function search(searchTerm) {
  var searchArray = [];
  for (var i = 0; i < cardsArray.length; i++) {
    if ((cardsArray[i].term.includes(searchTerm)) || (cardsArray[i].definition.includes(searchTerm))) {
      searchArray.push(cardsArray[i]);
    }
  }
  return searchArray;
}

function displaySearchResults(searchTerm) {
  $(".displayCard").empty();
  var filteredArray = search(searchTerm);
  showAll(filteredArray);
  $(".displayCard").show();
}

function createCategory(subject, category) {
  $("." + subject + " ul").append("<li id='" + category + "'>" + category + "</li>");
  var newCategory = new Category(category);
  for (var i = 0; i < subjectArray.length; i++) {
    if (subjectArray[i].name === subject) {
      subjectArray[i].categories.push(newCategory);
    }
  }
  console.log(newCategory);
  console.log(subjectArray);
  // subjectObject.category = category
}

function showAll(cardsArray) {
  cardsArray.forEach(function(card) {
    if (card.marked === true) {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,'+card.number+'" checked="checked"/>'
    } else {
      var cardMarker = '<input type="checkbox" name="marked" value="marked" id="check,'+card.number+'"/>'
    }
    $(".displayCard").append('<div class="flip-container" ontouchstart="this.classList.toggle("hover");"><div class="flipper"><div class="front" id ="' + card.number + '"><p id ="' + card.number + '">' + card.term + '</p></div><div class="back" id ="' + card.number + '">' + cardMarker + '<button type="button" class="btn btn-primary editButton">Edit</button><p id ="' + card.number + '">' + card.definition + '</p></div></div></div>');
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

// Edit card prototype
Card.prototype.editCard = function(card) {
  document.getElementById("editTerm").value = this.term;
  document.getElementById("editDefinition").value = this.definition;
}

$(document).ready(function() {

  // cards
  var newCard = new Card("computerScience", "JavaScript", "forLoop", "for (i = 0; i < array.length; i++) {console.log(i)}");
  cardsArray.push(newCard);

  newCard = new Card("computerScience", "JavaScript", "parameter", "a variable that is assigned to an argument");
  cardsArray.push(newCard);

  newCard = new Card("computerScience", "JavaScript", "argument", "what is passed into a function or method");
  cardsArray.push(newCard);

  newCard = new Card("computerScience", "JavaScript", "constructor", "A blueprint for creating many of the same type objects. Constructors add properties.");
  cardsArray.push(newCard);

  newCard = new Card("computerScience", "JavaScript", "instance", "Objects created with a constructor are instances of the type defined by the constructor. A constructor can be used to create many instances of the same type.");
  cardsArray.push(newCard);

  newCard = new Card("computerScience", "JavaScript", "prototype", "Prototypes store methods to be shared by all objects of the same type.");
  cardsArray.push(newCard);

  newCard = new Card("languages", "Spanish", "hello", "hola");
  cardsArray.push(newCard);

  newCard = new Card("languages", "Spanish", "goodbye", "adios");
  cardsArray.push(newCard);

  newCard = new Card("languages", "Spanish", "Where is the library?", "Donde esta la biblioteca?");
  cardsArray.push(newCard);

  newCard = new Card("languages", "French", "Where is the library?", "Où est la bibliothèque?");
  cardsArray.push(newCard);

  newCard = new Card("languages", "Russian", "Where is the library?", "где библиотека?");
  cardsArray.push(newCard);

  newCard = new Card("languages", "Indonesian", "Where is the library?", "Dimana perpustakaannya?");
  cardsArray.push(newCard);

  // subjects ad categories
  var newSubject = new Subject("computerscience");
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

  newSubject = new Subject("Mathematics");
  newCategory = new Category("Calculus");
  newSubject.categories.push(newCategory);
  newCategory = new Category("Algebra");
  newSubject.categories.push(newCategory);
  newCategory = new Category("Geometry");
  newSubject.categories.push(newCategory);
  newCategory = new Category("Proofs");
  newSubject.categories.push(newCategory);
  subjectArray.push(newSubject);


  // create new category
  $("").submit(function(event) {
    var newCategory = $("input#").val();
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
  });

  // displays all cards with current subject and category
  $("#chooseViewCards").click(function() {
    displayCurrentSelections();
  });

  // make a new card
  $("form#makeCardForm").submit(function(event) {
    event.preventDefault();
    var newCard = makeCard();
    console.log(newCard);
  });

  //edit card
  $("#chooseEditCard").click(function() {
    $(".editCard").show();
  });

  $(".displayCard").on('click', 'button', function() {
    $(".editCard").show();
    cardsArray[2].editCard();
  });

});
