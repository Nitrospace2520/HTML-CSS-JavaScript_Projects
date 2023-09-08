const addButton = document.querySelector("#add-task"); //* add button
const taskBody = document.querySelector("#task-body"); //* tbody tag
const checkMark = document.querySelector(".task-news"); //* td lastchild
let taskCounter = parseInt(
  taskBody.querySelector("tr:last-child td:first-child").textContent
);
// console.log(taskCounter);
function checkInputTask(inputString) {
  if (inputString === "") return false;
  else return true;
}
function createTableBodyRow(taskName) {
  const createTd1 = document.createElement("td");
  const createTd2 = document.createElement("td");
  const createTd3 = document.createElement("td");
  const createTr = document.createElement("tr");

  createTd1.innerHTML = `${++taskCounter}`;
  createTd2.innerHTML = `${taskName}`;
  createTd3.innerHTML = `${checkMark.innerHTML}`;
  createTr.appendChild(createTd1);
  createTr.appendChild(createTd2);
  createTr.appendChild(createTd3);

  createTr.id = `task-${taskCounter}`;
  return createTr;
}
function addNewTask(taskName) {
  const createdTr = createTableBodyRow(taskName);
  taskBody.appendChild(createdTr);
  // return taskBody;
}
addButton.addEventListener("click", (event) => {
  const addTaskName = document.querySelector("#input #tasks"); //* input text
  if (!checkInputTask(addTaskName.value)) {
    alert("Please provide a valid task");
  } else {
    // console.log(event);
    addNewTask(addTaskName.value);
  }
  addTaskName.value = "";
});
