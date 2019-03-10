alert("You have 9 chances to find out what letter the computer is thinking of. Press any KEY to begin!");

//variable for computer's random letter options
var letters = "abcdefghijklmnopqrstuvwxyz";

randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the variable randomLetter
function jsGuess() {
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(randomLetter);

}


// variable to track wins losses and remaining guesses
var wins = 0;
var losses = 0; 
var guessesLeft = 10;
var guessesSoFar = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessesLeft-text");
var guessesSoFar = document.getElementById("guessesSoFar-text");

// number of remaining guess, also the users inputs
var guessesRemaining = 10;
var output = "";
var guessesSoFar= output;
var userGuess = "";

//onkeyup event 
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === randomLetter){
        wins++;
        attempts = 10;
        alert("YOU WIN! click REFRESH or the F5 key to reset!")
        guessesSoFar = [];
    }
    // trying to get letters guessed on the guesses so far. 
    else{
        guessesRemaining--;
    }
    if(guessesRemaining <= 0){
        losses++;
        alert("YOU LOSE! good job clown. click REFRESH or F5 to reset and try again.")
        guessesSoFar = [];
    }
    

    document.getElementById('wins-text').innerHTML = "Wins: " + wins;
    document.getElementById('losses-text').innerHTML = "losses: " + losses;
    document.getElementById('guessesLeft-text').innerHTML = "Guesses left: " + guessesRemaining;
}

// trying to get the game to reset when you win or lose.
function resetGame(){
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
return alphabet[randomLetter];
}