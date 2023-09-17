const userType = document.querySelector(".type");
const typedItem = document.querySelector(".typed-item");
const heading = document.querySelector("div > h1");
const getName = () => {
  return "Bruce";
};
window.addEventListener("keypress", (event) => {
  heading.style.display = "none";
  typedItem.innerHTML = `
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
      <th>Code</th>
      </tr>
      <tr>
        <th>${event.key === " " ? "Space" : event.key}</th>
        <th>${event.keyCode}</th>
        <th>${event.code}</th>
      </tr>
    </table>
  `;
});
