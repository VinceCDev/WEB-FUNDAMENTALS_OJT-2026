const fireflies = document.querySelectorAll(".firefly");

function moveRandomly(element) {
    const maxWidth = window.innerWidth - 120;
    const maxHeight = window.innerHeight - 120;

    const randomX = Math.random() * maxWidth;
    const randomY = (Math.random() * (maxHeight - 100)) + 100;

    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
}

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