let num = document.querySelector("#cardNumber");

const cardNumberGenerator = () => {
  let randomNum = Math.floor(Math.random() * 13) + 1;

  if (randomNum == 11) {
    num.innerHTML = "J";
  } else if (randomNum == 12) {
    num.innerHTML = "Q";
  } else if (randomNum == 13) {
    num.innerHTML = "K";
  } else num.innerHTML = randomNum;
};

let suitTop = document.querySelector(".card-header");
let suitBot = document.querySelector(".card-footer");
let suitSimbol = "";

const suitsGenerator = () => {
  let randomSuit = Math.floor(Math.random() * 4);

  if (randomSuit == 0) {
    suitSimbol = "♦";
  } else if (randomSuit == 1) {
    suitSimbol = "♥";
  } else if (randomSuit == 2) {
    suitSimbol = "♠";
  } else {
    suitSimbol = "♣";
  }

  [suitTop, suitBot].forEach((suit) => (suit.innerHTML = suitSimbol));
};

const colorSelector = () => {
  if (suitSimbol == "♥" || suitSimbol == "♦") {
    num.classList.add("red");
    suitTop.classList.add("red");
    suitBot.classList.add("red");
  } else {
    num.classList.remove("red");
    suitTop.classList.remove("red");
    suitBot.classList.remove("red");
  }
};

const init = () => {
  suitsGenerator();
  cardNumberGenerator();
  colorSelector();
};
