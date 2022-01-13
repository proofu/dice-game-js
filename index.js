function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var randomNumber1;
randomNumber1 = getRandomInt(1, 7);
var randomNumber2;
randomNumber2 = getRandomInt(1, 7);

var diceLeftImg;
var diceRightImg;
diceLeftImg = document.getElementsByClassName("img1")[0];
diceRightImg = document.getElementsByClassName("img2")[0];

function setDiceImages(num1, num2){
    diceLeftImg.src = "images/dice" + num1 + ".png";
    diceRightImg.src = "images/dice" + num2 + ".png";
    return diceLeftImg, diceRightImg;    
}
setDiceImages(randomNumber1, randomNumber2);


var victoryTitle;
victoryTitle =
  document.getElementsByClassName("container")[0].firstElementChild;

if (randomNumber1 > randomNumber2) {
  victoryTitle.textContent = "🚩 Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  victoryTitle.textContent = "Player 2 Wins 🚩";
} else {
  victoryTitle.textContent = "Draw";
}
