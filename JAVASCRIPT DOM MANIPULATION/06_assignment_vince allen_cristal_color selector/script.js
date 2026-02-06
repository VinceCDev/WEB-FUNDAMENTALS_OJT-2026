const container = document.getElementById("container");

// Container Event: Resets color when the gray area is clicked
container.addEventListener("click", function () {
    alert("You clicked the container! Resetting color.");
    this.style.backgroundColor = "lightgray";
});

// Button Events: Changes color and STOPS propagation
document.querySelectorAll(".color-box").forEach(button => {
    button.addEventListener("click", function (event) {
        // 1. Stop the event from reaching the container
        event.stopPropagation();

        // 2. Get the actual computed background color of the button
        // (fix: this.style.backgroundColor is often empty if set via CSS class)
        const newColor = window.getComputedStyle(this).backgroundColor;

        // 3. Apply color to container
        container.style.backgroundColor = newColor;

        // Optional: distinct message
        console.log("Color changed to: " + this.textContent);
    });
});