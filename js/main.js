
// Get the circle element
const circle = document.querySelector("character6");

// Add event listeners for mouse hover and mouse leave
$(character1).addEventListener("mouseover", function() {
  // Change the background image to "Protect-Your-Ears.png"
  circle.style.backgroundImage = "url('Protect-Your-Ears.png')";
});

$(character1).addEventListener("mouseleave", function() {
  // Revert back to a circle by removing the background image
  c$(character1).style.backgroundImage = "none";
});

// main.js
$(document).ready(function () {
  const characters = ['#character1', '#character2', '#character3', '#character4', '#character5'];

  // Character states
  const states = [
      { transform: 'scale(1)', backgroundColor: '#3498db' },
      { transform: 'scale(1.2)', backgroundColor: '#e74c3c' },
      { transform: 'rotate(45deg)', backgroundColor: '#2ecc71' },
      { transform: 'translateX(50px)', backgroundColor: '#f39c12' },
      { transform: 'translateY(-50px)', backgroundColor: '#9b59b6' }
  ];

  // Initialize characters
  characters.forEach((character, index) => {
      $(character).on('mouseover', function () {
          updateCharacter(character, index + 1);
      });

      $(character).on('mouseout', function () {
          updateCharacter(character, 0);
      });

      updateCharacter(character, 0);
  });

  // Update character style based on the current state
  function updateCharacter(character, currentState) {
      $(character).css({
          transform: states[currentState % states.length].transform,
          backgroundColor: states[currentState % states.length].backgroundColor
      });
  }
});
