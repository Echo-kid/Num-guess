

let numGuess = document.getElementById("numButton");
numGuess.onclick = guessNumber;
// for loop to give 10 guesses.
function guessNumber(num) {
  let x = parseInt(prompt("Guess a number between 1 and 10. You have 10 guesses..."));
  let rando = Math.random();
  let rando2 = (rando * 10) + 1;
  let numField = Math.floor(rando2);
  for (var i = 10; i > 0; i--) {
    if (i === 1) {
      alert("Sorry. You are out of guesses...");
	  break;
    }
    if (x >= 1 && x <= 10) {
	  if (x === numField) {
		return alert("Congrats! You chose correctly!");
		break;
	  } else if (x !== numField) {
		  alert("You now have " + i + " guesses left...");
		  x = parseInt(prompt("Guess again..."));
	  }
    } else {
	    x = parseInt(prompt("Please chose a number between 1 and 10"));
	    x++;  
    }
  }
}


