// Get all the required elements from the HTML document
const options = document.querySelectorAll('.option-item');
const lockBtn = document.getElementById('lock-in-btn');
const messageArea = document.getElementById('message-area');

// Loop through every armor option to manage clicks, highlight the selection, and update the preview image
options.forEach(option => {
    option.addEventListener('click', function() {
        const part = this.getAttribute('data-part'); 
        const newSrc = this.getAttribute('data-src'); 
        const previewLayer = document.getElementById(`layer-${part}`);
        const armorName = this.getAttribute('title') || 'Selected Armor';
        
        if (previewLayer) {
            previewLayer.setAttribute('src', newSrc);
            previewLayer.setAttribute('alt', armorName);
        }

        const siblings = document.querySelectorAll(`.option-item[data-part="${part}"]`);
        siblings.forEach(sib => sib.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Handle the lock in button logic to determine if items are selected and show a message for error and success
if (lockBtn) {
    lockBtn.addEventListener('click', function() {
        const selectedItems = document.querySelectorAll('.selected');

        if (selectedItems.length === 4) {
            messageArea.textContent = "Character Locked In! Ready for battle.";
            messageArea.className = "success-message";
            
            lockBtn.disabled = true;
            lockBtn.textContent = "Locked";
            lockBtn.style.backgroundColor = "#555"; 
            
        } else {
            const missingCount = 4 - selectedItems.length;
            
            if (selectedItems.length === 0) {
                 messageArea.textContent = "Please select your equipment first!";
            } else {
                 messageArea.textContent = `Incomplete set! You need to select ${missingCount} more item(s).`;
            }
            
            messageArea.className = "error-message";
        }
    });
}