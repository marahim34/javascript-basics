let x;

const arr = [34, 39, 44, 50, 60, 78, 87, 90];

// To add a new element at the last
// arr.push(98);

// To delete the last element 
// arr.pop();

// To add a new element at zero index
// arr.unshift(25);

// To delete the first element
// arr.shift();

// To reverse the sequence of the elements
// arr.reverse();

console.log(arr);

x = arr.includes(20);

x = arr.indexOf(50);

x = arr.slice(1);
// Remember that slice gives you the elements in between, but doesn't change the original arrary
// x = arr.slice(1, 4);

// From what index to what index I want. It also manipulate the array. Once it separates the splice item, it made a new array.
// x = arr.splice(1, 4)

// To delete a particular element
// x = arr.splice(3, 1)

x = arr.slice(1, 4);

x = arr.splice(1, 4).reverse().toString().charAt();

console.log(x, arr);