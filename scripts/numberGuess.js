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

// Get button, label, and paragragph elements
let subButton = document.getElementById("numSubmit");
let labelText = document.getElementById("labelGuess");
let para = document.getElementById("para");

inputBar = document.getElementById("numberInput");
inputBar.focus();

// When guess button is clicked, evalute guess, act on guess, and display correct message
function onClick() {
    // Get user's guess and message paragraph elements from document
    numberInput = document.getElementById("numberInput");
    let guess = Number(numberInput.value);
    let message = document.getElementById("message");
    numberInput.value = '';

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
        if (guesses.length > 2){
            beginning = guesses.slice(0, -1);
            end = guesses.slice(-1);
            messageText = `${messageText} It took you ${guesses.length} tries and your guesses were ${beginning.join(", ")} and ${end}.`;
        }
        else if (guesses.length == 2) {
            messageText += ` It took you ${guesses.length} tries and your guesses were ${guesses[0]} and ${guesses[1]}.`;
        }
        else {
            messageText += ` and on the first try too! You're awesome!`;
        }
        numberInput.remove();
        subButton.remove();
        labelText.remove();
        para.remove();
    }

    // Give a message based on guess to user display
    message.innerHTML = messageText;
}