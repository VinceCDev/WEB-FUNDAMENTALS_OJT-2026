// Select container and display
const container = document.getElementById("container");
const selectionText = document.getElementById("selection-display");

// Select content elements
const body = document.body;
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

/* * DOCU: Updates text color for main elements
 * @param {string} color - color name
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function setTextColor(color) {
    body.style.color = color;
    h1.style.color = color;
    p.style.color = color;
    container.style.color = color;
}

/* * DOCU: Resets UI to default state
 * @param {void} - Uses global variables
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function handleResetClick() {
    body.style.backgroundColor = "#ffffff";
    container.style.backgroundColor = "lightgray";
    
    setTextColor("#333");
    selectionText.textContent = "Selected: None";
    selectionText.style.backgroundColor = "transparent";

    const activeButton = container.querySelector(".color-box.active");
    
    if (activeButton) {
        activeButton.classList.remove("active");
    }
}

/* * DOCU: Updates UI based on selected color
 * @param {Event} event - Click event object
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function handleColorSelection(event) {
    const clickedButton = event.target.closest(".color-box");

    if (clickedButton) {
        event.stopPropagation();

        console.log("Color changed to: " + clickedButton.textContent);

        const currentActive = container.querySelector(".color-box.active");
        if (currentActive) currentActive.classList.remove("active");

        clickedButton.classList.add("active");

        const newColor = window.getComputedStyle(clickedButton).backgroundColor;
        body.style.backgroundColor = newColor;
        container.style.backgroundColor = newColor;

        if (clickedButton.classList.contains("yellow") || clickedButton.classList.contains("pink")) {
            setTextColor("black");
            selectionText.style.backgroundColor = "rgba(0,0,0,0.1)";
        } else {
            setTextColor("white");
            selectionText.style.backgroundColor = "rgba(255,255,255,0.2)";
        }

        selectionText.textContent = "Selected: " + clickedButton.textContent;
    }
}

// Manage reset handler
document.addEventListener("click", handleResetClick);

// Handle selection handler
container.addEventListener("click", handleColorSelection);