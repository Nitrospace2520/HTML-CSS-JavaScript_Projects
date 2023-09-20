const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let count = 0;
let hour = 0;
let minute = 0;
let second = 0;
// let millisecond = 0;
let interval;

const updateWatch = () => {
  count += 1;
  const hrs = document.querySelector("#set-hr");
  const mins = document.querySelector("#set-min");
  const secs = document.querySelector("#set-sec");
  // const milli = document.querySelector("#set-milli");
  // millisecond = count % 100;
  second = Math.floor(count % 60);
  minute = Math.floor(count / 60) % 60;
  hour = Math.floor(count / 3600);
  hrs.innerHTML = `<b>${hour}</b>`;
  mins.innerHTML = `<b>${minute}</b>`;
  secs.innerHTML = `<b>${second}</b>`;
  // milli.innerHTML = `<b>${millisecond}</b>`;
};

start.addEventListener("click", (event) => {
  interval = setInterval(updateWatch, 1000);
});

stop.addEventListener("click", (event) => {
  clearInterval(interval);
  interval = null;
});
