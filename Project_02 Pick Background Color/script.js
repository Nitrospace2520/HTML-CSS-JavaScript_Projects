const setBackGroundColor = (colour) => {
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = colour;
  if (colour !== "yellow")
    document.querySelector("main h1").style.color = "#f5f5f5";
  if (colour !== "add-color" || colour !== "") {
    try {
      const nextEleSib = document.querySelector(
        `#${colour}`
      ).nextElementSibling;
      for (
        let i = 0;
        i < document.querySelectorAll(".select-color").length;
        i++
      ) {
        const element = document.querySelectorAll(".select-color")[i];
        element.style.border = `3px solid ${nextEleSib.id}`;
        if (colour === "yellow") {
          element.style.border = "3px solid whitesmoke";
        }
      }
    } catch (error) {}
  }
};
const takeInputColor = () => {
  const userBGcolor = prompt("Enter Your favorite color: ");
  if (userBGcolor != null && userBGcolor != "") return userBGcolor;
  else return takeInputColor();
};
const changeBackgroundColor = (color) => {
  if (color === "add-color") {
    color = takeInputColor();
    const userDefinedBGcolor = document.querySelector("#add-color");
    userDefinedBGcolor.innerHTML = `${color}<hr><br/><button>Refresh</button>`;
    userDefinedBGcolor.style.backgroundColor = color;
    userDefinedBGcolor.style.flexFlow = "row wrap";
    document.querySelector("button").onclick = () => {
      location.reload();
    };
  }
  setBackGroundColor(color);
};
document.body.addEventListener("click", (event) => {
  if (event.target.className === "select-color") {
    changeBackgroundColor(`${event.target.id}`);
  }
});
