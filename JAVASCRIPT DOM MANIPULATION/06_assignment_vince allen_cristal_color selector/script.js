// Select container or section
const container = document.getElementById("container");

/* * DOCU: Resets background color when container is clicked
 * @param {void} - Uses a this approach
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen Cristal
 * Last Updated By: Vince Allen Cristal
 */
container.addEventListener("click", function () {
    alert("You clicked the container! Resetting color.");
    
    this.style.backgroundColor = "lightgray";
});

// Select all color buttons
document.querySelectorAll(".color-box").forEach(button => {

    /* * DOCU: Updates container color and stops event bubbling
     * @param {Event} event - The click event object
     * @returns {void} - Does not return a value
     * @throws {void} - No explicit exceptions thrown
     * * Last Updated: 2026-02-09
     * Author: Vince Allen Cristal
     * Last Updated By: Vince Allen Cristal
     */
    button.addEventListener("click", function (event) {
        event.stopPropagation();

        const newColor = window.getComputedStyle(this).backgroundColor;

        container.style.backgroundColor = newColor;

        alert("Color changed to: " + this.textContent);
    });
});