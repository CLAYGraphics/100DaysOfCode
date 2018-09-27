// Functions are usually put at the top 
// Function parameters sit inside the parenthesis
// function getRandomNumber( upper ) {
//     var randomNumber = Math.floor( Math.random() * upper) + 1;
//     return randomNumber;
// }
// console.log ( getRandomNumber(6) );
// console.log ( getRandomNumber(100) );
// console.log ( getRandomNumber(10000) );

// Adding more than one parameter
// function getArea (width, length, unit) {
//     var area = width * length;
//     return area + " " + unit;
// }
// console.log (getArea(10,20, 'sq ft'));


function getRandomNumber (lower, upper) {
    if ( isNaN(lower) || isNaN(upper) ) {
        throw new Error ('error message');
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber (0, 10));
console.log(getRandomNumber (100, 1000));
console.log(getRandomNumber ('nine', 10));
document.write(getRandomNumber (0, 10000));
