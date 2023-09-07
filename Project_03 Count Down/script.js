let nIntervId;
const startButton = document.querySelector("#setbtn");
const resetButton = document.querySelector("#resetbtn");
const section1 = document.querySelector("#input");
const section2 = document.querySelector("#output");
const allDivsSec2 = Array.from(document.querySelectorAll(".output>div"));
const pauseBtn = document.querySelector(".pause-btn");
const stopBtn = document.querySelector(".stop-btn");
resetButton.addEventListener("click", (event) => {
  location.reload();
});
const checkValue = (val) => {
  if (val < 0 || val === "" || isNaN(val)) return false;
  else return true;
};
const doStyle = () => {
  section2.style.display = "flex";
  section1.style.display = "none";
  section2.style =
    "display: flex; flex-flow: row wrap; justify-content: center; gap: 2rem; align-items: center";
  allDivsSec2.forEach((element) => {
    element.style.height = "75px";
    element.style.width = "75px";
    element.style.backgroundColor = "#123456";
    element.style.color = "#f5f5f5";
    element.style =
      "display: flex; justify-content: center; align-items: center";
  });
  console.log(allDivsSec2);
};
const CountDownObj = {
  leftDays: 0,
  leftHrs: 0,
  leftMins: 0,
  leftSecs: 0,
};
const displayToUsers = (obj) => {
  const remDays = document.querySelector(".output-no-of-days");
  const remHrs = document.querySelector(".output-no-of-hours");
  const remMins = document.querySelector(".output-no-of-minutes");
  const remSecs = document.querySelector(".output-no-of-seconds");
  console.log(remDays, remHrs, remMins, remSecs);
  if (!nIntervId) {
    nIntervId = setInterval(() => {
      obj.leftSecs -= 1;
      if (obj.leftSecs === 0 && obj.leftMins >= 1) {
        obj.leftSecs += 60;
        obj.leftMins -= 1;
      } else if (obj.leftMins === 0 && obj.leftHrs >= 1) {
        obj.leftMins += 60;
        obj.leftHrs -= 1;
      } else if (obj.leftHrs === 0 && obj.leftDays >= 1) {
        obj.leftHrs += 24;
        obj.leftDays -= 1;
      }
      remDays.innerHTML = `${obj.leftDays} :`;
      remHrs.innerHTML = `${obj.leftHrs} :`;
      remMins.innerHTML = `${obj.leftMins} :`;
      remSecs.innerHTML = `${obj.leftSecs}`;
    }, 1000);
  }
};
let pauseCount = 1;
pauseBtn.addEventListener("click", (event) => {
  // Pause if the user want to pause the timer:
  if (pauseCount % 2 != 0) {
    clearInterval(nIntervId);
    nIntervId = null;
  } else {
    displayToUsers(CountDownObj);
  }
  pauseCount++;
});
stopBtn.addEventListener("click", (event) => {
  location.reload();
});
startButton.addEventListener("click", (event) => {
  const daysVal = parseInt(document.querySelector("#day").value);
  const hrsVal = parseInt(document.querySelector("#hour").value);
  const minsVal = parseInt(document.querySelector("#minute").value);
  const secsVal = parseInt(document.querySelector("#second").value);
  if (
    checkValue(daysVal) &&
    checkValue(hrsVal) &&
    checkValue(minsVal) &&
    checkValue(secsVal)
  ) {
    doStyle();
    //? Changing the objects properies values:-
    CountDownObj.leftDays = daysVal;
    CountDownObj.leftHrs = hrsVal;
    CountDownObj.leftMins = minsVal;
    CountDownObj.leftSecs = secsVal;
    displayToUsers(CountDownObj);
  } else {
    alert("Please provide a right input");
  }
});
