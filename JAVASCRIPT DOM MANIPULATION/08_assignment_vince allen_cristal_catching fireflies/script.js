// Select firefly elements
const fireflies = document.querySelectorAll(".firefly");

/* * DOCU: Moves element to random screen position
 * @param {HTMLElement} element - Target element
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function moveRandomly(element) {
    const maxWidth = window.innerWidth - 120;
    const maxHeight = window.innerHeight - 120;

    const randomX = Math.random() * maxWidth;
    const randomY = (Math.random() * (maxHeight - 100)) + 100;

    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
}

/* * DOCU: Creates visual explosion effect
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function createExplosion(x, y) {
    const burst = document.createElement("div");
    burst.classList.add("explosion-burst");
    
    burst.style.left = (x - 5) + "px";
    burst.style.top = (y - 5) + "px";
    document.body.appendChild(burst);

    setTimeout(() => {
        burst.remove();
    }, 400);
}

// Loop through fireflies
fireflies.forEach(function (firefly, index) {
    moveRandomly(firefly);
    firefly.style.animationDelay = (index * 0.5) + "s";

    firefly.addEventListener("click", function (e) {
        const clickX = e.clientX;
        const clickY = e.clientY;
        
        createExplosion(clickX, clickY);

        this.style.transform = "scale(0.5)";
        moveRandomly(this);
        this.style.visibility = "hidden";

        setTimeout(() => {
            this.style.visibility = "visible"; 
            this.style.transform = "scale(1)"; 
        }, 1000);
    });
});