// Get references to the display elements and the buttons through query and ID selection
const buttons = document.querySelectorAll('.slayer-btn');
const heroImg = document.getElementById('hero-img');
const heroName = document.getElementById('hero-name');
const heroAbility = document.getElementById('hero-ability'); 

// Handle character selection together with its image and text
buttons.forEach(btn => {
    btn.onclick = () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const name = btn.getAttribute('data-name');
        const ability = btn.getAttribute('data-ability'); 
        const img = btn.getAttribute('data-img');
        
        heroImg.style.opacity = '0.5';
        
        setTimeout(() => {
            heroName.textContent = name;
            heroAbility.textContent = ability; 
            heroImg.setAttribute('src', img);
            heroImg.setAttribute('alt', name);
            heroImg.style.opacity = '1';
        }, 100);
    };
});