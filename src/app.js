let num = document.querySelector("#cardNumber");
let suitTop = document.querySelector(".card-header");
let suitBot = document.querySelector(".card-footer");

const cardNumberGenerator = () => {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  num.innerHTML = randomNum >= 11 ? ["J", "Q", "K"][randomNum-11] : randomNum;
};

const suitsNumberGenerator = () => {
  let suits = ["♦", "♥", "♠", "♣"];
  let colors = ["red", "red", "", ""];
  let suitNum = Math.floor(Math.random() * 4);
  let suitSimbol = suits[suitNum];
  let color = colors[suitNum];

  [num, suitTop, suitBot].forEach((el) => {
    el.classList.remove("red");
    if (color) el.classList.add(color);
  });

  suitTop.innerHTML = suitSimbol;
  suitBot.innerHTML = suitSimbol;
};

const init = () => {
  suitsNumberGenerator();
  cardNumberGenerator();
};
