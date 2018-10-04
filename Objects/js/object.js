var person = {
    name: 'Paul',
    country: 'UK',
    age: 32,
    collegeStudent: true,
    skills: ['HTML', 'CSS', 'Design', 'Photography', 'JavaScript'],
    gender: 'Male'
};

function print(message) {
    var div = document.getElementById('listDiv');
    div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Clay';
message += '<p>But people call me ' + person.name + '</p>';
// person.age += 1;
message += '<p>My age is ' + person.age + '</p>'; 
message += '<p>I have ' + person.skills.length + ' skills</p>';
message += '<p>I think my best skill has to be ' + person.skills[2] + ' but I\m trying to improve my ' + person.skills[1] + '</p>';
message += '<p>My list of skills include ' + person.skills.join(', ') + '</p>';
print(message);

// This is a For In Loop. You can't use dot notation e.g ".name" / Instead use square brackets [ ]
// In example below the prop variable can be named anything such as key, personData 
for ( prop in person ) {
    console.log(prop, ': ', person[prop]) ;
}