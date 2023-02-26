// Prompt user for a maximum number
let maxNum = getNumber("What should the maximum number be?");
// Put the chosen maximum number into paragraph on user window
let maxNumText = document.getElementById("maxNum");
maxNumText.innerHTML = `${maxNum}`;

// Generate a random number for user to guess
let randNum = Math.floor(Math.random() * maxNum) + 1;

// Show random number generated for testing
console.log(`Random number - ${randNum}`);

// Create an array to hold user guesses
let guesses = [];

// When guess button is clicked, evalute guess, act on guess, and display correct message
function onClick() {
    // Get user's guess and message paragraph elements from document
    let guess = Number(document.getElementById("number").value);
    let message = document.getElementById("message");

    // Testing console statement
    console.log(`Entered onClick() - guess${guess} - maxNum:${maxNum}`);

    // Call function to evaluate guess and act based on guess
    messageText = evaluateGuess(guess, maxNum, guesses);

    // If the guess was valid, add to user guesses array
    if (messageText != "") {
        guesses.push(guess);
    }

    // If user's guess was the correct one, add array's information to winning message
    if (messageText == "You got it!") {
        messageText = `${messageText} It took you ${guesses.length} tries and your guesses were ${guesses.join(', ')}.`;
    }

    // Give a message based on guess to user display
    message.innerHTML = messageText;
};