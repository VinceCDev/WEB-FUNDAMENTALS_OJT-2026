const todoForm = document.querySelector('#todo-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const notificationArea = document.querySelector('#notification-area');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        showNotification("Please enter a task!", "warning");
        return;
    }

    addTask(taskText);
    taskInput.value = "";
});

function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'task-text';
    
    span.addEventListener('click', function() {
        span.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
        showNotification(`Task removed: "${text}"`, "danger");
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    showNotification(`Task added: "${text}"`, "success");
}

function showNotification(message, type) {
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    notif.textContent = message;

    notificationArea.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}