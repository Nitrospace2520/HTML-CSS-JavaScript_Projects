let length = 8;
let incNums = false;
let incSpecialChars = false;
const copyButton = document.querySelector("#btn-copy");
const generatedPass = document.querySelector("#generated-password");
const lengthOfPass = document.querySelector("#length");
const displayLength = document.querySelector("#display-length");
const includedNumber = document.querySelector("#include-number");
const includedSpecialChars = document.querySelector("#include-special-chars");

const generateRandomPassword = () => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (includedNumber.checked === true) {
    str += "0123456789";
  }
  if (includedSpecialChars.checked === true) {
    str += "~!@#$%^&*()_-+=`<>?/{}[]";
  }
  length = lengthOfPass.value;
  displayLength.innerHTML = length;
  for (let index = 1; index <= length; index++) {
    pass += str.charAt(Math.floor(Math.random() * str.length));
  }
  //   console.log(pass);
  generatedPass.value = `${pass}`;
  copyButton.innerHTML = "copy";
};
copyButton.addEventListener("click", (event) => {
  window.navigator.clipboard.writeText(generatedPass.value);
  copyButton.innerHTML = "copied!";
});
window.addEventListener("load", () => {
  generateRandomPassword();
});
lengthOfPass.addEventListener("change", generateRandomPassword);
includedNumber.addEventListener("click", generateRandomPassword);
includedSpecialChars.addEventListener("click", generateRandomPassword);
