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
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateName() {
    const newName = inputName.value.trim();
    
    if (newName !== "") {
        displayName.textContent = newName;
        console.log('Name updated to:', newName);
    }
}

/* * DOCU: Updates the bio text if input is valid
 * @param {void} - Uses global variables
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateBio() {
    const newBio = inputBio.value.trim();
    
    if (newBio !== "") {
        displayBio.textContent = newBio;
        console.log('Bio updated to:', newBio);
    }
}

/* * DOCU: Updates the image source and alt text if URL is valid
 * @param {void} - Uses global variables
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateImage() {
    const newImgUrl = inputImg.value.trim();
    
    if (newImgUrl !== "") {
        displayImg.setAttribute('src', newImgUrl);
        displayImg.setAttribute('alt', 'Updated Profile Picture');
        console.log('Image updated to:', newImgUrl);
    }
}

/* * DOCU: Applies the selected color to the card background
 * @param {void} - Uses global variables
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateBackgroundColor() {
    const newColor = colorPicker.value;
    
    card.style.backgroundColor = newColor;
    console.log('Background color updated to:', newColor);
}

/* * DOCU: Orchestrates the update of all profile sections
 * @param {void} - Uses global variables
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateProfile() {
    console.log('=== Updating Profile Card ===');
    
    updateName();
    updateBio();
    updateImage();
    updateBackgroundColor();
    
    console.log('=== Profile Card Update Complete ===');
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

console.log('Profile Card Editor script loaded successfully!');