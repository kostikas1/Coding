body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.app-container {
    max-width: 600px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
}

#task-container {
    margin-top: 20px;
}

input[type="text"] {
    padding: 10px;
    width: 70%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
}

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (newTaskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${newTaskInput.value}
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);
        newTaskInput.value = ''; // Clear input field
    }
}

function removeTask(button) {
    const taskList = document.getElementById('task-list');
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}