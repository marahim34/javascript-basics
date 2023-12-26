// Challenge 1
const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let x;

x = arr1.slice(0, 4);

x = arr1.splice(0, 4);

const newArray = [...x, ...arr2];

console.log(newArray);