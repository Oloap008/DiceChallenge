var random1 = Math.floor( Math.random() * 6) + 1;

var diceImage1 = "images/dice" + random1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImage1);

var random2 = Math.floor( Math.random() * 6) + 1;

var diceImage2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

if( random1 > random2){
  document.getElementById('phrase').innerHTML = "🚩 Player 1 wins";
}else if ( random1 < random2){
  document.getElementById('phrase').innerHTML = "Player 2 wins 🚩";
}else {
  document.getElementById('phrase').innerHTML = "🚩 Draw 🚩";
}
