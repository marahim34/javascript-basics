// Solution 1 
const myString = 'developer';

let myNewString;

let x = myString.charAt(0).toUpperCase();
let y = myString.slice(1);

myNewString = x + y;


console.log(myNewString);


// Solution 2

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);

// Solution 3
myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);