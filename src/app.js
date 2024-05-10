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

//let suit = document.querySelectorAll(".card-header, .card-footer");

const suitsGenerator = () => {
  let suitTop = document.querySelector(".card-header");
  let suitBot = document.querySelector(".card-footer");
  let suitNum = Math.floor(Math.random() * 4);
  let suitSimbol = "";
  if (suitNum == 0) {
    suitSimbol = "♦";
  } else if (suitNum == 1) {
    suitSimbol = "♥";
  } else if (suitNum == 2) {
    suitSimbol = "♠";
  } else {
    suitSimbol = "♣";
  }

  if (suitSimbol == "♥" || suitSimbol == "♦") {
    num.classList.add("red");
    suitTop.classList.add("red");
    suitBot.classList.add("red");
  } else {
    num.classList.remove("red");
    suitTop.classList.remove("red");
    suitBot.classList.remove("red");
  }

  [suitTop, suitBot].forEach((suit) => (suit.innerHTML = suitSimbol));

  // [...suit].forEach((tag) => {
  //   tag.innerHTML = suitSimbol;
  // });
};

const init = () => {
  suitsGenerator();
  cardNumberGenerator();
};
