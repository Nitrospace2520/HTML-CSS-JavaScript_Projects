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
  if (guessVal === "" || guessVal < 0 || guessVal > 100 || isNaN(guessVal)) {
    displayRes.innerHTML = `Please provide a <b><i>VALID</i></b> number`;
  } else {
    remainingGuesses--;
    if (remainingGuesses === 0) {
      displayRes.innerHTML = `You failed`;
      setTimeout(() => {
        displayRes.innerHTML = `Let's play for the next round and best of luck`;
        location.reload();
      }, 3000);
    }
    displayRes.innerHTML = `${giveHint(guessVal)}`;
    leftGuessCount.innerHTML = `<b><u>${remainingGuesses}</u></b>`;
    previousGuess.innerHTML = `<b><u>${prevGuess}</u></b>`;
    prevGuess.push(guessVal);
  }
  //   console.log(event);
});
