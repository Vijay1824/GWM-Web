let taskList = [];

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    taskList.push(taskText);
    taskInput.value = "";

    displayTasks();
}

function removeTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `${taskList[i]} <button onclick="removeTask(${i})">Remove</button>`;
        taskListElement.appendChild(taskItem);
    }
}

displayTasks();
