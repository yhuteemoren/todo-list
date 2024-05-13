
const input = document.querySelector("input");
const add_task_button = document.getElementById("add_task");
const todo_list = document.getElementById("todos");
const done_list = document.getElementById("done");
const display_todo_section = document.getElementById("display_todo");
const display_done_section = document.getElementById("display-done");
const task_count = document.getElementById("task-count");
const task_count_done = document.getElementById("task-count-done");

input.addEventListener("input", () => {
  add_task_button.removeAttribute("disabled");
});

let tasks = [];

let renderTasks = (taskList, elementList, taskCountElement, displaySection) => {
  elementList.innerHTML = "";

  // check if there are tasks to display
  if (taskList.length) {
    displaySection.style.display = "flex";
  } else {
    displaySection.style.display = "none";
  }

  taskCountElement.innerHTML = taskList.length;
  taskList.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `<span class="task">
                        ${task.task}
                    </span>`;
    if (task.isDone) {
      li.innerHTML += `<button class="undo" onclick="toggleTask(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                            viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline points="80 136 32 88 80 40" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                            <path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" fill="none"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16">
                            </path>
                        </svg>
                    </button>`;
    } else {
      li.innerHTML += `<button class="completed" onclick="toggleTask(this)"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                            fill="currentColor" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline points="216 72 104 184 48 128" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                        </svg></button>
                    <button class="delete" onclick="deleteTask(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                            viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                            <line x1="88" y1="24" x2="168" y2="24" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                            <path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                        </svg>
                    </button>`;
    }

    elementList.appendChild(li);
  });
};

let addTask = () => {
  if (input.value) {
    tasks.push({ task: input.value, isDone: false });
    input.value = "";
    let notDoneTasks = filterTasks(false);

    renderTasks(notDoneTasks, todo_list, task_count, display_todo_section);
  }
};

// filter tasks based on wether it's completed or not
let filterTasks = (isCompleted) => {
  let filtered_tasks = tasks.filter((task) => task.isDone === isCompleted);
  return filtered_tasks;
};
let deleteTask = (index) => {
  tasks.splice(index, 1);
  // return the not completed tasks
  let notDoneTasks = filterTasks(false);
  renderTasks(notDoneTasks, todo_list, task_count, display_todo_section);
};

// toggle task status
let toggleTask = (e) => {
  const toggled_task = e.previousElementSibling.innerHTML.trim();
  const index = tasks.findIndex((task) => task.task === toggled_task);

  tasks[index].isDone = !tasks[index].isDone;

  let notDoneTasks = filterTasks(false);
  let doneTasks = filterTasks(true);
  renderTasks(notDoneTasks, todo_list, task_count, display_todo_section);
  renderTasks(doneTasks, done_list, task_count_done, display_done_section);
};
