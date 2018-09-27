// quiz begins, no answers correct
var playerScore = 0;

// ask questions
var questionOne = prompt('What is 5 + 3?');
if (parseInt(questionOne) === 8) {
   playerScore += 1;
} 
var questionTwo = prompt('What is the colour of grass?');
if (questionTwo.toUpperCase() === 'GREEN') {
    playerScore += 1;
} 
var questionThree = prompt('What is 140 + 6?');
if (parseInt(questionThree) === 146) {
    playerScore += 1;
} 
var questionFour = prompt('What is 99 - 9?');
if (parseInt(questionFour) === 90) {
    playerScore += 1;
} 
var questionFive = prompt('This is the last question. What is 44 + 6?');
if (parseInt(questionFive) === 50) {
    playerScore += 1;
} 

// output results

document.write('<p>You got a total of ' + playerScore + ' questions right.</p>')

if (playerScore === 5) {
        document.write('<p><strong>You got the crown!</strong></p>');
    } else if(playerScore >= 3) {
        document.write('<p>Not a bad effort</p>');
    } else if(playerScore <= 3) {
        document.write('<p>Crap. Try again</p>');
    }

