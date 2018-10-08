// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const resetButton = document.getElementById('resetButton');
// const myTextInput = document.getElementById('myTextInput');
// const myParagraph = document.getElementsByTagName('p');

// myButton.addEventListener('click', () => {
//     myHeading.style.color = myTextInput.value;
// });

// resetButton.addEventListener('click', () => {
//     myHeading.style.color = 'black';
// });

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1 ) {
    myList[i].style.color = 'purple';
}

const errorNotPurple = document.querySelectorAll('.errorNotPurple');

for (let i = 0; i < errorNotPurple.length; i += 1 ) {
    errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1 ) {
    evens[i].style.backgroundColor = 'lightgray';
}



// document.querySelector('li');
// // returns the first li element on the page

// document.querySelectorAll('li');
// // returns EVERY li element on the page

// document.querySelector('#myHeading');
// // select the ID of an HTML element

// document.querySelectorAll('.errorNotPurple');
// // selects all of the elements on the page with the class errorNotPurple