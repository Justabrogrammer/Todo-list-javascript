// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.innerText = taskInput.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(task);
        };

        const task = document.createElement('li');
        task.appendChild(taskText);
        task.appendChild(deleteBtn);

        taskList.appendChild(task);
        taskInput.value = '';
    }
}

// Event listener for Enter key press
document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
