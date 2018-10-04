// Use a 2D Array to hold questions and answers
var questions = [
    { 
      question : 'How many States are in the United States?',
      answer : 50 
    },
    { 
      question : 'How many Continents are there?', 
      answer : 7 
    },
    { 
      question : 'How many legs does a Spider have?', 
      answer : 8 
    },
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
      question = questions[i].question;
      answer = questions[i].answer;    
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
  
  
  