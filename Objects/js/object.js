var person = {
    name: 'Bob',
    country: 'UK',
    age: 42,
    collegeStudent: true,
    skills: ['HTML', 'CSS', 'Design', 'Photography', 'JavaScript'],
    gender: 'Male'
};
//  alert( person.name );
//  person.name = 'Bobby';
//  person.gender = 'Male';
//  alert( person.name );
//  alert( person.gender );


function print(message) {
    var div = document.getElementById('listDiv');
    div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Bobby';
message += '<p>But people call me ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is ' + person.age + '</p>'; 
message += '<p>I have ' + person.skills.length + ' skills</p>';
message += '<p>I think my best skill is ' + person.skills[2] + ' but I really want to improve my ' + person.skills[1] + ' skills</p>';
message += '<p>A list of skills I have are ' + person.skills.join(', ') + '</p>';
print(message);

// This is a For In Loop. You can't use dot notation e.g ".name" / Instead use square brackets [ ]
// In example below the prop variable can be named anything such as key, personData 
for ( prop in person ) {
    console.log(prop, ': ', person[prop]) ;
}