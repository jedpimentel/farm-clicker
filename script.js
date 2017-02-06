$(document).ready(function() {
  //id/string pairs
  var animalNoises = {
    "chicken": "CLUCK",
    "cow": "MOOOOOO",
    "dog": "WOOF",
    "duck": "QUAAACK",
    "lamb": "BHAaAaAaA",
  }

  var iconSquareSize = 64;
  var mapHeight = 600;
  var mapWidth  = 600;
  var maxX = 600 - iconSquareSize;
  var maxY  = 600 - iconSquareSize;
  var posHolder = {};
  function randomX() { return Math.random() * maxX + "px"; }
  function randomY() { return Math.random() * maxY + "px"; }

  // $( ".animal" ).css("left", randomX()).css("top", randomY());
  $( ".animal" ).each(function( index ) {
    $( this ).css("left", randomX()).css("top", randomY());
    $( this ).on("click", function() {
      alert(animalNoises[this.id]);
    });
  });

  $( ".animal" ).on("click", function() {
    var x = $(this).position().left
    var y = $(this).position().top
    var angle = Math.random() * 2 * Math.PI;
    x += iconSquareSize * Math.cos(angle);
    y += iconSquareSize * Math.sin(angle);
    if(x < 0) { x = 0; }
    if(y < 0) { y = 0; }
    if(x > maxX) { x = maxX; }
    if(y > maxY) { y = maxY; }

    $(this).css("left", x + "px");
    $(this).css("top" , y + "px");

  })

});
