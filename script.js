// script.js

const menuToggle = document.getElementById('menu-toggle');
const menuButtons = document.querySelectorAll('.Monkeys'); // Select all buttons with class Monkeys
const optionsDiv = document.querySelector('.options');

menuToggle.addEventListener('click', () => {
  optionsDiv.classList.toggle('vertical-list'); // Toggle vertical-list class for options div
  menuButtons.forEach(button => button.classList.toggle('hidden')); // Toggle hidden class for each button
});

// Adjust the display property of menuToggle based on window size
function adjustMenuToggle() {
  if (window.innerWidth <= 1080) { // Adjusted threshold to 1080px
    menuToggle.style.display = 'block';
    menuButtons.forEach(button => button.classList.add('hidden')); // Hide buttons initially on smaller screens
  } else {
    menuToggle.style.display = 'none';
    menuButtons.forEach(button => button.classList.remove('hidden')); // Ensure menu buttons are shown on larger screens
    optionsDiv.classList.remove('vertical-list'); // Ensure vertical-list class is removed on larger screens
  }
}

// Adjust the menu toggle button display on window resize
window.addEventListener('resize', adjustMenuToggle);
adjustMenuToggle(); // Initial check on page load
