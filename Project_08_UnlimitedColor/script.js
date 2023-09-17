const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const bgColor = container.querySelector("#color-change");
const generateRandomColors = () => {
  const hexColorArr = "0123456789abcdef".split("");
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hexColorArr[Math.floor(Math.random() * hexColorArr.length)];
  }
  body.style.backgroundImage = `none`;
  body.style.backgroundColor = `${randomColor}`;
  // console.log(randomColor);
  container.style.display = "flex";
  bgColor.style.color = randomColor;
  bgColor.innerHTML = randomColor;
};

let interval;
start.addEventListener("click", (event) => {
  if (!interval) {
    interval = setInterval(() => {
      generateRandomColors();
    }, 1000);
  }
});

stop.addEventListener("click", (event) => {
  clearInterval(interval);
  interval = null;
});
