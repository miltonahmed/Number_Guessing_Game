let PlayerOneInput = document.querySelector('.input_text_Box_one');
let PlayerOneButton = document.querySelector('.player_one_submit_btn');
let playerOneSection = document.querySelector('.player_section_one');
let playerOneTextWarning = document.querySelector('.player_one_warning');

let playerTwoInput = document.querySelector('.input_text_Box_two');
let playerTwoButton = document.querySelector('.player_two_submit_btn');
let playerTwoSection = document.querySelector('.player_section_two');
let playerTwoTextWarning = document.querySelector('.player_two_warning');

let chanceTitle = document.querySelector('.chance_title');
let chance = document.querySelector(".chance");
let winner = document.querySelector(".winner");
let titleHeading = document.querySelector(".heading")



let chanceCount = 5;

// Step 1: Player One input
PlayerOneButton.addEventListener('click', function () {
  if (PlayerOneInput.value === '') {
    playerOneTextWarning.innerHTML = "&#9940; Please enter a number. This field can't be left blank.";
  } else if (isNaN(PlayerOneInput.value)) {
    playerOneTextWarning.innerHTML = ' &#128523 Invalid input.  Text is not accepted.';
  } else if (PlayerOneInput.value < 1 || PlayerOneInput.value > 10) {
    playerOneTextWarning.innerHTML = 'Please enter a valid number between 1 to 10';
  } else {
    playerOneSection.style.display = 'none';
    playerTwoSection.style.display = 'block';
    
    
  }
});

// Step 2: Player Two guess
playerTwoButton.addEventListener('click', function () {
  if (playerTwoInput.value === '') {
    playerTwoTextWarning.innerHTML = "&#9940; Please enter a number. This field can't be left blank.";
  } else if (isNaN(playerTwoInput.value)) {
    playerTwoTextWarning.innerHTML = '&#128523 Invalid input.  Text is not accepted';
  } else if (playerTwoInput.value < 1 || playerTwoInput.value > 10) {
    playerTwoTextWarning.innerHTML = 'Please enter a valid number between 1 to 10';
  } else {
    playerTwoTextWarning.innerHTML = '';
    chanceTitle.style.display = "block";
    chance.innerHTML = chanceCount;
    

    if (chanceCount > 0) {
      chanceCount--;
      chance.innerHTML = chanceCount;

      if (PlayerOneInput.value === playerTwoInput.value) {
        winner.innerHTML = "&#128513; Player Two is the Winner!";
        winner.style.color = "green"
        chanceTitle.style.display = "none";
        playerTwoButton.style.display = "none";
        playerTwoInput.style.display = "none";
        titleHeading.style.display = "none"
      } else {
         playerTwoTextWarning.innerHTML = ` Wrong guess! You have ${chanceCount} chance left.`;
        
      }
    }
  }
});
