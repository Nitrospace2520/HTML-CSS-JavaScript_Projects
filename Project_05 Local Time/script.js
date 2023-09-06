const time = document.querySelector("#time");
setInterval(() => {
  const localTime = new Date();
  time.innerHTML = `${localTime.toLocaleTimeString()}`;
}, 1000);
console.log(time);
