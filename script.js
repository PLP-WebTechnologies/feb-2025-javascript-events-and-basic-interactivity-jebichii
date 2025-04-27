// script.js
const clickButton = document.getElementById('clickButton');
const hoverBox = document.getElementById('hoverBox');
const keypressInput = document.getElementById('keypressInput');
const secretMessage = document.getElementById('secretMessage');

// Button Click Event
clickButton.addEventListener('click', () => {
    alert('Button clicked!');
});

// Hover Effect
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightgreen';
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'lightgray';
});

// Keypress Detection
keypressInput.addEventListener('keypress', (event) => {
    console.log(`You pressed: ${event.key}`);
});

// Double-Click Action
secretMessage.addEventListener('dblclick', () => {
    alert('You discovered the secret!');
});

const changeButton = document.getElementById('changeButton');
const galleryImages = document.querySelectorAll('#gallery img');

// Button Interaction
changeButton.addEventListener('click', () => {
    changeButton.textContent = 'You changed me!';
    changeButton.style.backgroundColor = 'purple';
});

// Simple Image Gallery Slideshow
let currentImage = 0;
setInterval(() => {
    galleryImages.forEach((img, index) => {
        img.style.display = index === currentImage ? 'block' : 'none';
    });
    currentImage = (currentImage + 1) % galleryImages.length;
}, 3000);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');

document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email.includes('@')) {
        feedback.textContent = 'Please enter a valid email address.';
    } else if (password.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters.';
    } else {
        feedback.textContent = 'Form submitted successfully!';
    }
});

// Real-time Feedback
passwordInput.addEventListener('input', () => {
    feedback.textContent =
        passwordInput.value.length < 8 ?
        'Password too short!' :
        'Password length is good!';
});