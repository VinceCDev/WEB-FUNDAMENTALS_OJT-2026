// DOM Element Selection
const box = document.getElementById('box');
const jack = document.getElementById('jack');
const btn = document.getElementById('btn');

/* DOCU: Toggles the Jack-in-the-Box state between open and closed.
 * It swaps the box image source and triggers the animation for the Jack character.
 * @param {void} - This function does not accept parameters.
 * @returns {void} - No return values and updates the DOM elements directly.
 * 
 * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function executeJackInTheBox() {
    const closedImg = box.getAttribute('data-closed');
    const openImg = box.getAttribute('data-open');

    if (box.getAttribute('src').includes('closed_box')) { 
        box.setAttribute('src', openImg); 
        jack.classList.add('show'); 
        btn.innerText = "Close Box";

        setTimeout(() => {
            if (box.getAttribute('src') === openImg) {
                box.setAttribute('src', closedImg);
                jack.classList.remove('show');
                btn.innerText = "Click Me";
            }
        }, 3000);
    } else {
        box.setAttribute('src', closedImg);
        jack.classList.remove('show'); 
        btn.innerText = "Click Me";
    }
}

// Initialize event listeners to handle user interactions
btn.addEventListener('click', executeJackInTheBox);
box.addEventListener('click', executeJackInTheBox);