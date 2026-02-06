const card = document.querySelector('#card');
const displayName = document.querySelector('#display-name');
const displayBio = document.querySelector('#display-bio');
const displayImg = document.querySelector('#display-img');

const inputName = document.querySelector('#input-name');
const inputBio = document.querySelector('#input-bio');
const inputImg = document.querySelector('#input-img');
const inputColor = document.querySelector('#color-picker');

const btnName = document.querySelector('#btn-name');
const btnBio = document.querySelector('#btn-bio');
const btnImg = document.querySelector('#btn-img');
const btnColor = document.querySelector('#btn-color');

function updateName() {
    if (inputName.value.trim() !== "") {
        displayName.innerText = inputName.value;
    } else {
        alert("Please enter a name.");
    }
}

function updateBio() {
    if (inputBio.value.trim() !== "") {
        displayBio.textContent = inputBio.value;
    } else {
        alert("Please enter a bio.");
    }
}

function updateImage() {
    if (inputImg.value.trim() !== "") {
        displayImg.setAttribute('src', inputImg.value);
    } else {
        alert("Please enter an image URL.");
    }
}

function updateColor() {
    card.style.backgroundColor = inputColor.value;
}

btnName.addEventListener('click', updateName);
btnBio.addEventListener('click', updateBio);
btnImg.addEventListener('click', updateImage);
btnColor.addEventListener('click', updateColor);

inputName.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        updateName();
    }
});

inputBio.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        updateBio();
    }
});

inputImg.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        updateImage();
    }
});