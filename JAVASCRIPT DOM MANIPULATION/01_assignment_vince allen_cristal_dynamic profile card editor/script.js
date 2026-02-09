// Select display elements
const card = document.querySelector('#card');
const displayName = document.querySelector('#display-name');
const displayBio = document.querySelector('#display-bio');
const displayImg = document.querySelector('#display-img');

// Select input fields
const inputName = document.querySelector('#input-name');
const inputBio = document.querySelector('#input-bio');
const inputImg = document.querySelector('#input-img');
const inputColor = document.querySelector('#color-picker');

/* * DOCU: Validates input and updates the display name element text.  
 * @param {void} - No parameters
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal  
 */
function updateName() {
    if (inputName.value.trim() !== "") {
        displayName.innerText = inputName.value;
    } else {
        alert("Please enter a name.");
    }
}

/* * DOCU: Validates input and updates the display bio element text content.  
 * @param {void} - No parameters
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal  
 */
function updateBio() {
    if (inputBio.value.trim() !== "") {
        displayBio.textContent = inputBio.value;
    } else {
        alert("Please enter a bio.");
    }
}

/* * DOCU: Validates the input URL and updates the image source attribute.  
 * @param {void} - No parameters 
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal  
 */
function updateImage() {
    if (inputImg.value.trim() !== "") {
        displayImg.src = inputImg.value;
    } else {
        alert("Please enter an image URL.");
    }
}

/* * DOCU: Updates the background color of the main card element.  
 * @param {void} - No parameters
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09  
 * Author: Vince Allen D. Cristal  
 * Last Updated By: Vince Allen D. Cristal  
 */
function updateColor() {
    card.style.backgroundColor = inputColor.value;
}