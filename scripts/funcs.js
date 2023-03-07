/** 
 * Gets a number from the user to use for maximum value.
 * @param {string} prompt - user prompt on screen for user
 * @returns {Number} maxNum - Maximum number for higher-lower
 */
function getNumber(prompt) {
    // Declare variables
    let valid_input = false;
    let maxNum, input;

    // Iterate until valid input is put in by user
    while (!valid_input) {
        input = window.prompt(prompt); // Prompt user for number through window

        maxNum = Number(input);

        // Check if number is valid and larger than 0
        if (maxNum != NaN && maxNum > 0) {
            valid_input = true;
            maxNum = Math.round(maxNum); // Round in case of decimal entered
        }
    }

    return maxNum;
}

/** 
 * Checks the validity of the user's guess and acts based on guess
 * @param {string} guess - user's guess in higher-lower
 * @param {Number} maxNum1 - Maximum number for higher-lower
 * @param {Array} guesses - An array of all of the user's guesses
 * @returns {String} messageText - A message to display to user
 */
function evaluateGuess(guess, maxNum1, guesses) {
    let messageText = "";

    console.log(`Guess from inside evaluateGuess - guess: ${guess} and maxNum1: ${maxNum1}`);

    // Display message to user based on given guess
    if (isNaN(guess)) { // If guess wasn't a number, show error
        window.alert("That is not a number!");
    }
    else if ((guess <= 0) || (guess > maxNum1)) { // If guess out of range, show error
        window.alert("That number is not in range, try again.");
    }
    else if (guesses.indexOf(guess) != -1) { // If user did same guess, show error
        window.alert("You have already guessed that number.");
    }
    else if (randNum == guess) { // If user got guess correct
        messageText = "You got it!";
    }
    else if (guess < randNum) { // If guess was too high
        messageText = "No, try a higher number.";
    }
    else if (guess > randNum) { // If guess was too low
        messageText = "No, try a lower number.";
    }
    return messageText;
}

// TAKEN FROM W3 https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// Get the input field
let numberInput = document.getElementById("numberInput");

// Execute a function when the user presses a key on the keyboard
numberInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("numSubmit").click();
  }
});