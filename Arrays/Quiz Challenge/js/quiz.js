// Use a 2D Array to hold questions and answers
var questions = [
  [ 'How many States are in the United States?', 50 ],
  [ 'How many Continents are there?', 7 ],
  [ 'How many legs does a Spider have?', 8 ],
];
// Create a Variable that holds the number of correct answers
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [ ];
var wrong = [ ];


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for ( var i = 0; i < arr.length; i += 1 ) {
    listHTML += '<li>' + arr[i] + '</li>' 
  }
  listHTML += '</ol>';
  return listHTML;
}

// Use loops to cycle through each question
for ( var i = 0; i < questions.length; i += 1 ) {
    question = questions[i][0];
    answer = questions[i][1];    
// With Programming you work your way out from the inner most parenthesis 
    response = parseInt(prompt(question));
// Use conditional statement to compare Player response to Answer 
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
  } else {
    wrong.push(question);
  }
}
html = "You got " + correctAnswers + " question(s) correct.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);






// listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';

// while (true) {
//   search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
//   search = search.toLowerCase();
//   if (search === 'quit') {
//       break;
//   } else if ( search === 'list') {
//       print( inStock.join(', ') );
//   } else {
//       if ( inStock.indexOf( search ) > -1 ) {
//           print('Yes. we have ' + search + ' in the store.');
//       } else {
//           print('We don\'t have ' + search + ' in stock.');
//       }
//   }
// }


// function printSongs( songs ) {
//   var listHTML = '<ol>';
//   for ( var i = 0; i < songs.length; i += 1) {
//     listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// printSongs(playList);




