// Select key DOM elements
const todoForm = document.querySelector('#todo-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const notificationArea = document.querySelector('#notification-area');

// Manage form submission in webpage
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

/* * DOCU: Creates a new task item and appends it to the list
 * @param {string} text - The content of the task
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal  
 */
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

/* * DOCU: Displays a temporary notification message
 * @param {string} message - The text to display
 * @param {string} type - The alert type
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal  
 */
function showNotification(message, type) {
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    notif.textContent = message;

    notificationArea.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}