var randomNumber1 = Math.random() * 6;
var randomNumber = Math.floor(randomNumber1) + 1;
var name = "images/" + "dice"+ randomNumber + ".png";
//console.log(name);

document.querySelector("img.img1").setAttribute("src",name);
//console.log(image1);


var randomNumber2 = Math.random() * 6;
var randomNumber3 = Math.floor(randomNumber2) + 1;
var name1 = "images/" + "dice"+ randomNumber3 + ".png";

document.querySelector("img.img2").setAttribute("src",name1);

if ( randomNumber === randomNumber3) {
  document.querySelector("h1").innerHTML = "Match draw";
}

else if (randomNumber > randomNumber3) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

//  document.querySelector("h1").innerHTML = "Refresh Me";
