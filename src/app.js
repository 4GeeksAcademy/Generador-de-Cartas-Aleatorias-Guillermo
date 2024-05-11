//Numero de carta
let num = document.querySelector("#cardNumber");

const cardNumberGenerator = () => {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum == 1) {
    num.innerHTML = "A";
  } else if (randomNum == 11) {
    num.innerHTML = "J";
  } else if (randomNum == 12) {
    num.innerHTML = "Q";
  } else if (randomNum == 13) {
    num.innerHTML = "K";
  } else num.innerHTML = randomNum;
};

//Palo
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

//Color
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

//Temporizador
let temp = 10;
let contador = document.querySelector(".badge");

const temporizador = () => {
  if (--temp == 0) {
    init();
    temp = 10;
  }
  contador.innerHTML = temp;
};

setInterval(temporizador, 1000);

//Tamaño
let cardSize = document.querySelector(".card");

const newSize = () => {
  let height = parseInt(document.querySelector("#altura").value);
  let width = parseInt(document.querySelector("#anchura").value);
  cardSize.style.height = `${height}rem`;
  cardSize.style.width = `${width}rem`;
};

const resetSize = () => {
  cardSize.style.height = `29.375rem`;
  cardSize.style.width = `19.688rem`;
};

//Agrupamos funciones
const init = () => {
  suitsGenerator();
  cardNumberGenerator();
  colorSelector();
};
