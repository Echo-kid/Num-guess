

var guess = parseInt(prompt("Guess a number between 1 and 10. You have 10 guesses..."));
alert("You picked " + guess);
// for loop to give 10 guesses.
function guessNumber(num) {
	var rando = Math.random();
	var rando2 = (rando * 10) + 1;
	var numField = Math.floor(rando2);
    var x = num;
    for (var i = 9; i > 0; i--) {
    	if (x >= 1 && x <= 10) {
        	if (x === numField) {
                  return alert("Congrats! You chose correctly!");
                  break;
        	}
        	else if (x !== numField) {
            	  alert("You now have " + (i + 1) + " guesses left...");
            	  x = parseInt(prompt("Guess again..."));
        	}
        }
        else {
          x = parseInt(prompt("Please chose a number between 1 and 10"));    
        }
    }
}

guessNumber(guess);

