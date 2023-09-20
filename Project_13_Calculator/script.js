const buttons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector(".display");
const buttonClass = document.querySelector(".buttons");

const checkClickedButton = (checkButton) => {
  if (checkButton.innerHTML === "AC") {
    display.innerHTML = "";
    return false;
  } else if (checkButton.innerHTML === "C") {
    display.innerHTML = `${display.innerHTML.replace(
      display.innerHTML[display.innerHTML.length - 1],
      ""
    )}`;
    console.log(display.innerHTML);
    return false;
  } else if (checkButton.innerHTML === "=") {
    return false;
  }
  return true;
};
buttonClass.addEventListener("click", (event) => {
  const checkButton = event.target;
  if (buttons.includes(checkButton)) {
    if (checkClickedButton(checkButton)) {
      display.innerHTML += checkButton.innerHTML;
    }
  }
});
const calculate = () => {
  return `radhe radhe`;
};
document.querySelector("#btn-e").addEventListener("click", (event) => {
  display.innerHTML = `${calculate()}`;
});
