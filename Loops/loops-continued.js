var upper = 10000;
var randomNumber = getRandomNumber(10000);
var guess;
var attempts = 0;

function getRandomNumber (upper) {
    return Math.floor( Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
    guess = getRandomNumber( upper );
    attempts +=1;
}

document.write('<h1>The random number was: ' + randomNumber + '</h1>');
document.write('<h2>The computer took ' + attempts + ' attempts to get it right!</h2>');