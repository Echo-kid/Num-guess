
let randoNum = Math.floor((Math.random() * 100) + 1);
let guess = prompt("Guess a number between 1 and 100. You have 10 guesses...");
// for loop to give 10 guesses.
function guessNumber(randoNum) {
    for (var i = 9; i > 0; i--) {
        if (guess === randoNum) {
            alert("Congrats! You chose correctly!")
            break;
        }
        else if (guess !== randoNum) {
            alert("You now have " + i + " guesses left...");
            guess = prompt("Guess again...");
        }
        else {
        	alert("You are out of guesses");
        }
    }
}
console.log(guessNumber(randoNum));

