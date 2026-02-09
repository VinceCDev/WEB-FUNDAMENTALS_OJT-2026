// Select the trigger button and the container by getting their IDs
const notifyBtn = document.getElementById('notify-btn');
const notificationList = document.getElementById('notification-list');

// Establish a new notification element and adds it to the list with auto-dismiss functionality
notifyBtn.onclick = () => {
    const noteBox = document.createElement('div');
    noteBox.className = 'notification-container'; 

    const noteText = document.createElement('p');
    noteText.innerText = 'You have a new message!';
    noteText.style.margin = '0'; 
    noteText.style.color = '#2c3e50';

    const dismissBtn = document.createElement('button');
    dismissBtn.innerText = 'X';
    dismissBtn.className = 'dismiss-btn';

    noteBox.appendChild(noteText);
    noteBox.appendChild(dismissBtn);

    if (notificationList.firstChild) {
        notificationList.insertBefore(noteBox, notificationList.firstChild);
    } else {
        notificationList.appendChild(noteBox);
    }

    dismissBtn.onclick = () => {
        notificationList.removeChild(noteBox);
    };

    setTimeout(() => {
        if (noteBox.parentNode) {
            notificationList.removeChild(noteBox);
        }
    }, 5000);
};