var randomNumber1 = Math.floor(Math.random()*7);

var newDice = "dice" + randomNumber1 + ".png";

var newSrc = "/img" + newDice;

document.querySelector(img1)[0].setAttribute("src", newSrc);

var randomNumber2 = Math.floor(Math.random()*7);

var newDice2 = "dice" + randomNumber2 + ".png";

var newSrc2 = "/img" + newDice2;

document.querySelector("img")[1].setAttribute("src", newSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").setAttribute(h1, "🚩Player 1 wins!")
};

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").setAttribute(h1, "Player 2 wins!🚩")
};

else (randomNumber1 = randomNumber2) {
    document.querySelector("h1").setAttribute(h1, "🚩Draw!🚩")
};

// Hello Leigh