let counter = 0;
const decreaseButton = document.getElementById("btn-dec");
const resetButton = document.getElementById("btn-reset");
const increaseButton = document.getElementById("btn-inc");

const changeCounterValue = () => {
  const counterValue = document.getElementById("counter-value");
  if (counter === 0) counterValue.style.color = "#000";
  if (counter <= -1) {
    counterValue.style.color = "#700";
  } else if (counter >= 1) {
    counterValue.style.color = "#070";
  }
  counterValue.innerHTML = counter;
  console.log(counter);
};
decreaseButton.addEventListener("click", (event) => {
  counter -= 1;
  changeCounterValue();
});
resetButton.addEventListener("click", (event) => {
  counter = 0;
  changeCounterValue();
});
increaseButton.addEventListener("click", (event) => {
  counter += 1;
  changeCounterValue();
});
