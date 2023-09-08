const theRandomNumber = Math.floor(Math.random() * 100 + 1);
console.log(theRandomNumber);
const prevGuess = [];
let remainingGuesses = 10;
const giveHint = (guess) => {
  if (guess == theRandomNumber) {
    return "Congratulation! Correct Number";
  } else if (guess > theRandomNumber) {
    return "Smaller";
  } else if (guess < theRandomNumber) {
    return "Bigger";
  }
};
document.getElementById("submit-guess").addEventListener("click", (event) => {
  const guessVal = parseInt(document.querySelector("#guessed-number").value);
  const displayRes = document.querySelector("#hint");
  const leftGuessCount = document.querySelector("#remaining-guess-count");
  const previousGuess = document.querySelector("#display-previous");
  if (guessVal === "" || guessVal < 1 || guessVal > 100 || isNaN(guessVal)) {
    displayRes.innerHTML = `Please provide a <b><i>VALID</i></b> number`;
  } else {
    remainingGuesses--;
    if (remainingGuesses <= 0) {
      document.querySelector("#submit-guess").setAttribute("disabled", "true");
      displayRes.innerHTML = ``;
      let time = 7;
      setTimeout(() => {
        location.reload();
      }, 7000);
      setInterval(() => {
        displayRes.innerHTML = `You failed! Let's play for the next round and best of luck<br/>New game will start within ${time} seconds`;
        time--;
      }, 1000);
    }
    if (giveHint(guessVal) === "Congratulation! Correct Number") {
      document.querySelector("#submit-guess").setAttribute("disabled", "true");
      displayRes.innerHTML = `Let's play for the next round and best of luck`;
      let time = 7;
      setInterval(() => {
        displayRes.innerHTML = `Congratulation! Correct Number<br\>New game will start within ${time} seconds`;
        time--;
      }, 1000);
      setTimeout(() => {
        location.reload();
      }, 7000);
    }
    displayRes.innerHTML = `${giveHint(guessVal)}`;
    leftGuessCount.innerHTML = `<b><u>${remainingGuesses}</u></b>`;
    prevGuess.push(guessVal);
    previousGuess.innerHTML = `<b><u>${prevGuess}</u></b>`;
    document.getElementById("guessed-number").value = "";
  }
  //   console.log(event);
});
