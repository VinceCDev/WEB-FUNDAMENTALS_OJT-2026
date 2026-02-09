// Select container elements
const card = document.getElementById('card');
const editorForm = document.getElementById('editor-form');

// Select display elements
const displayName = document.getElementById('display-name');
const displayBio = document.getElementById('display-bio');
const displayImg = document.getElementById('display-img');

// Select input fields
const inputName = document.getElementById('input-name');
const inputBio = document.getElementById('input-bio');
const inputImg = document.getElementById('input-img');
const colorPicker = document.getElementById('color-picker');

// Select button element
const btnUpdateProfile = document.getElementById('btn-update-profile');

/* * DOCU: Updates the display name if input is valid
 * @param {void} - Uses global variables
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateName() {
    const newName = inputName.value.trim();
    
    if (newName !== "") {
        displayName.textContent = newName;
    }
}

/* * DOCU: Updates the bio text if input is valid
 * @param {void} - Uses global variables
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateBio() {
    const newBio = inputBio.value.trim();
    
    if (newBio !== "") {
        displayBio.textContent = newBio;
    }
}

/* * DOCU: Updates the image source and alt text if URL is valid
 * @param {void} - Uses global variables
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateImage() {
    const newImgUrl = inputImg.value.trim();
    
    if (newImgUrl !== "") {
        displayImg.src = newImgUrl;
        displayImg.alt = 'Updated Profile Picture';
    }
}

/* * DOCU: Applies the selected color to the card background
 * @param {void} - Uses global variables
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateBackgroundColor() {
    const newColor = colorPicker.value;
    card.style.backgroundColor = newColor;
}

/* * DOCU: Orchestrates the update of all profile sections
 * @param {void} - Uses global variables
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateProfile() {
    updateName();
    updateBio();
    updateImage();
    updateBackgroundColor();
}

// Handle update button click
btnUpdateProfile.addEventListener('click', updateProfile);

// Handle Enter key in form
editorForm.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        updateProfile();        
    }
});