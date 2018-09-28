// var upper = 10000;
// var randomNumber = getRandomNumber(10000);
// var guess;
// var attempts = 0;

// function getRandomNumber (upper) {
//     return Math.floor( Math.random() * upper) + 1;
// }

// while (guess !== randomNumber) {
//     guess = getRandomNumber( upper );
//     attempts +=1;
// }

// document.write('<h1>The random number was: ' + randomNumber + '</h1>');
// document.write('<h2>The computer took ' + attempts + ' attempts to get it right!</h2>');

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber (upper) {
    var num = Math.floor( Math.random() * upper) + 1;
    return num;
}

do {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
} while( ! correctGuess )
document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' guesses ');