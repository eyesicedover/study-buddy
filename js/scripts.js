var currentSelections = new CurrentSelections;
var number = 0;
var cardsArray = [];

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
  if (term === "" || definition === "" ) {
    alert("Please fill in all fields.");
  } else {
    var newCard = new Card(subject, category, term, definition, number);
    cardsArray.push(newCard);
    $("#makeOrViewCard").hide();
    $(".makeCard").hide();
    $("form#makeCardForm").trigger("reset");
    return newCard;
  }
}

function selectSubject(subject) {
  currentSelections.setSubject(subject);
  currentSelections.setCategory("");
  $("li").removeClass("active");
  $("#chooseViewCards").hide();
  $("#makeOrViewCard").hide();
  $(".subject").hide();
  $("." + subject).show();
  console.log(subject);
  console.log(currentSelections);
}

function selectCategory(category) {
  currentSelections.setCategory(category);
  var subject = currentSelections.getSubject();
  $(".subject").hide();
  $("." + subject).show();
  $("." + category + "Deck").show();
  $("li").removeClass("active");
  $("#makeCardForm").show();
  $("#chooseViewCards").show();
  $("#makeOrViewCard").show();
  console.log(category);
  console.log(currentSelections);
}

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

// filter by subject and category
// Card.prototype.editCard =


$(document).ready(function() {

  // cards
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

  // subjects
  $(".subject-btn").click(function() {
    var subject = $(this).val();
    selectSubject(subject);
  });

  // categories
  $("li").click(function() {
    var category = $(this).text().toLowerCase().replace(" ", "");
    selectCategory(category);
    $(this).addClass("active");
  });

  $("#chooseMakeCard").click(function() {
    $(".makeCard").show();
  });

  $("#chooseViewCards").click(function() {
    $("").show();
  });

  $("form#makeCardForm").submit(function(event) {
    event.preventDefault();

    var newCard = makeCard();
    console.log(newCard);
  });

});
