// so this code is what it does, these are the guesses the player could type to play the game
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// Sets the computerGuess variable equal to a random choice from the computerChoice array.
//this code makes AI get a random alphabet or number, computerChoices.length is for ---> w,l,?left, etc
// start from the bottom, or zero...info of all the game
var wins = 0;
var losses = 0;
var finalCountdown = 9;
var letterUser = [];


// this code is for the user to read and record the keys of input 
document.onkeyup = function (event) {
	var userGuess = event.key;


	if (userGuess === computerGuess) { // this code if you get the letter right with the computer letter therefore you win
		wins++;
		finalCountdown = 9; //resets guesses to 9 if win
		userGuess = "";
		letterUser = [];
		computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; //goes back to random
		;
	} else {
		finalCountdown--;
		letterUser.push(userGuess);
	}
	if (finalCountdown === 0) { //this code does when the guesses
		finalCountdown = 9;
		losses++;
		letterUser = [];
		computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; //this code does a random

	}

	document.getElementById("W").innerHTML = wins;
	document.getElementById("Ls").innerHTML = losses;
	document.getElementById("finalCountdown").innerHTML = finalCountdown;
	document.getElementById("guesses").innerHTML = letterUser;
};