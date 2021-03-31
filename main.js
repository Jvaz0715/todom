//query the input field
const newTODO = document.querySelector('.todo-input');

//query the ADD button
const addButton = document.querySelector('.add-todo');

//query the todo OL list
const toDoList = document.querySelector(".todo-list");

//create click event that will do something when addButton is clicked
addButton.addEventListener('click', createNewTODO)

//create a function that will append the input field as a new line item:

function createNewTODO() {
  console.log("you have clicked the add button");
  //take this new input and append it as a LI to the OL displayed
  console.log(newTODO.value)
  const newLineItem = document.createElement('li');
  newLineItem.innerText = newTODO.value;
  toDoList.appendChild(newLineItem);
}