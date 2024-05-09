let num = document.querySelector("#cardNumber");

const cardNumberGenerator = () => {
  let randomNum = Math.floor(Math.random() * 12) + 1;
  let figures = "";

  if (randomNum == 11) {
    figures = "J";
  } else if (randomNum == 12) {
    figures = "Q";
  } else if (randomNum == 13) {
    figures = "K";
  }
  randomNum >= 11 ? (num.innerHTML = figures) : (num.innerHTML = randomNum);
};

//let suit = document.querySelectorAll(".card-header, .card-footer");
let suitTop = document.querySelector(".card-header");
let suitBot = document.querySelector(".card-footer");

const suitsNumberGenerator = () => {
  let suitNum = Math.floor(Math.random() * 3);
  let suitSimbol = "";
  if (suitNum == 0) {
    suitSimbol = "♦";
    num.classList.add("red");
    suitTop.classList.add("red");
    suitBot.classList.add("red");


  } else if (suitNum == 1) {
    suitSimbol = "♥";
    num.classList.add("red");
    suitTop.classList.add("red");
    suitBot.classList.add("red");

    num.classList.add("red");
  } else if (suitNum == 2) {
    suitSimbol = "♠";
  } else {
    suitSimbol = "♣";
  }

  suitTop.innerHTML = suitSimbol;
  suitBot.innerHTML = suitSimbol;

  // [...suit].forEach((tag) => {
  //   tag.innerHTML = suitSimbol;
  // });
};
