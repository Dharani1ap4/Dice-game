var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dicerandomnumber.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1);