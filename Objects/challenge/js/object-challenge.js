var students = [
    { 
      name : 'Paul',
      track : 'iOS',
      achievements : 9, 
      points : 12412
    },
    { 
        name : 'Dave',
        track : 'JavaScript',
        achievements : 4, 
        points : 3240
    },
    { 
        name : 'Mark',
        track : 'Front End Development',
        achievements : 16, 
        points : 5680
    },
    { 
        name : 'Josie',
        track : 'HTML & CSS',
        achievements : 12, 
        points : 3500
    },
    { 
        name : 'Mark',
        track : 'Python',
        achievements : 21, 
        points : 6850
    },
  ];

var message = "";
var student;

function print(message) {
    var outputDiv = document.getElementById('listDiv');
    outputDiv.innerHTML = message;
  }

for ( var i = 0; i < students.length; i += 1 ) {
    student = students[i];
    message += '<h2>Student : ' + student.name + '</h2>';
    message += '<p>Track : ' + student.track + '</p>';
    message += '<p>Achievements : ' + student.achievements + '</p>';
    message += '<p>Points : ' + student.points + '</p>';
}

print(message);