const card = document.getElementById('card');
const displayName = document.getElementById('display-name');
const displayBio = document.getElementById('display-bio');
const displayImg = document.getElementById('display-img');
const editorForm = document.getElementById('editor-form'); 
const inputName = document.getElementById('input-name');
const inputBio = document.getElementById('input-bio');
const inputImg = document.getElementById('input-img');
const colorPicker = document.getElementById('color-picker');

const btnUpdateProfile = document.getElementById('btn-update-profile');

function updateName() {
    const newName = inputName.value.trim();
    if (newName !== "") {
        displayName.textContent = newName;
        console.log('Name updated to:', newName);
    }
}

function updateBio() {
    const newBio = inputBio.value.trim();
    if (newBio !== "") {
        displayBio.textContent = newBio;
        console.log('Bio updated to:', newBio);
    }
}

function updateImage() {
    const newImgUrl = inputImg.value.trim();
    if (newImgUrl !== "") {
        displayImg.setAttribute('src', newImgUrl);
        displayImg.setAttribute('alt', 'Updated Profile Picture');
        console.log('Image updated to:', newImgUrl);
    }
}

function updateBackgroundColor() {
    const newColor = colorPicker.value;
    card.style.backgroundColor = newColor;
    console.log('Background color updated to:', newColor);
}

function updateProfile() {
    console.log('=== Updating Profile Card ===');
    
    updateName();
    updateBio();
    updateImage();
    updateBackgroundColor();
    
    console.log('=== Profile Card Update Complete ===');
}

btnUpdateProfile.addEventListener('click', updateProfile);

editorForm.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        updateProfile();        
    }
});

console.log('Profile Card Editor script loaded successfully!');