// const newItem = document.getElementById("todo");
// const botton = document.getElementsByClassName("input-add");
// const todolist = document.getElementById("todo-list");
// const li = document.getElementsByTagName("li");


// addButton.addEventListener("click",  function(){
//     const newTask = newItem.value;
//     if (newTask) {
//         const listItem= document.createElement("li");
//         listItem.textContent= Task;
//         todoList.appendChild(listItem);
//         newItem.value = ""
//     }
// });


// function strikeThrough(e){
//     if (e.target.tagName === "li"){
//         e.target.class
//     }
// }
const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function() {
  const newTask = newTaskInput.value;
  if (newTask) {
    const listItem = document.createElement("li");
    listItem.textContent = newTask;
    todoList.appendChild(listItem);
    newTaskInput.value = "";  // Clear the input field
  }
});