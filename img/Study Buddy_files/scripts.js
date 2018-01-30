function FlashCard(name, age, type, size, image, description) {
  this.name = name;
  this.age = age;
  this.type = type;
  this.size = size;
  this.image = image;
  this.description = description;
  this.heart = false;
  this.adopted = false;
}


$(document).ready(function() {


  $("form#").submit(function(event) {
    event.preventDefault();

    var name = $("").val();
    var age = $("").val();
    var type = $("").val();
    var size = $("").val();
    var image = $("").val();
    var description = $("").val();

    newPet = new Pet(name, age, type, size, image, description);
    petsArray.push(newPet);

    $("button").click(function() {

    })
  });

});
