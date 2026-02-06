const container = document.getElementById("container");
const selectionText = document.getElementById("selection-display");
const body = document.body;
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

document.addEventListener("click", function() {
    body.style.backgroundColor = "#ffffff";
    container.style.backgroundColor = "lightgray";
    
    setTextColor("#333");
    selectionText.textContent = "Selected: None";
    selectionText.style.backgroundColor = "transparent";

    const activeButton = container.querySelector(".color-box.active");
    if (activeButton) {
        activeButton.classList.remove("active");
    }
});

container.addEventListener("click", function(event) {
    
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
});

function setTextColor(color) {
    body.style.color = color;
    h1.style.color = color;
    p.style.color = color;
    container.style.color = color;
}