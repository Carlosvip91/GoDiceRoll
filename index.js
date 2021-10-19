
//Create a random, whole number from 1-6 and assign it to a variable called randomNumber1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

//Create a variable that concatenates strings and the result of randomNumber1
//to point to the corresponding image file in our images folder.
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

//Set the image using setAttribute onto the first image for Player 1
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

//Apply the same process to Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//Check the values of both random numbers and see which is larger or if it's tied.
//Using querySelector change the inner HTML of the h1 to reflect the result.

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
else {
  document.querySelector("h1").innerHTML = "Draw! ⚔️";
}
