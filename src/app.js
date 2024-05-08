const cardNumberGenerator = () => {
  let randomNum = Math.floor(Math.random() * 12) + 1;
  let figures = "";
  let num = document.querySelector("#cardNumber");
  if (randomNum == 11) {
    figures = "J";
  } else if (randomNum == 12) {
    figures = "Q";
  } else if (randomNum == 13) {
    figures = "K";
  }
  randomNum >= 11 ? (num.innerHTML = figures) : (num.innerHTML = randomNum);
};

const suitsNumberGenerator = () => {
  let suitNum = Math.floor(Math.random() * 3);
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

  let suit = document.querySelectorAll(".card-header, .card-footer");

  [...suit].forEach((tag) => {
    tag.innerHTML = suitSimbol;
  });
};
