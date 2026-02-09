// Select key DOM elements
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const notificationArea = document.querySelector('#notification-area');

/* * DOCU: Handles the Add Task button click. Gets input and validates.
 * @param {void}
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-09  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal  
 */
function handleAddTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        showNotification("Please enter a task!", "warning");
        return;
    }

    addTask(taskText);
    taskInput.value = "";
}

/* * DOCU: Creates a new task item and appends it to the list
 * @param {string} text - The content of the task
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-09  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal  
 */
function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'task-text';
    
    // Set inline onclick for the span
    span.setAttribute('onclick', 'toggleTask(this)');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.className = 'delete-btn';

    // Set inline onclick for the delete button
    deleteBtn.setAttribute('onclick', 'removeTask(this)');

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    showNotification(`Task added: "${text}"`, "success");
}

/* * DOCU: Toggles the completed class on the task text
 * @param {HTMLElement} element - The span element clicked
 * @returns {void}
 * Last Updated: 2026-02-09  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal 
 */
function toggleTask(element) {
    element.classList.toggle('completed');
}

/* * DOCU: Removes the parent list item of the clicked button
 * @param {HTMLElement} button - The button element clicked
 * @returns {void}
 */
function removeTask(button) {
    const li = button.parentElement;
    const text = li.querySelector('.task-text').textContent;
    
    taskList.removeChild(li);
    showNotification(`Task removed: "${text}"`, "danger");
}

/* * DOCU: Displays a temporary notification message
 * @param {string} message - The text to display
 * @param {string} type - The alert type
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-09  
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