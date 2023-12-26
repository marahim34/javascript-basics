// function add(a, b) {
//     return a + b;
// }



// Arrow function syntax
const add = (a, b) => {
    return a + b;
}

// Implicit return
const subtract = (a, b) => a - b;

// can leave parenthesis () with a single param
const double = a => a * 2;

// Returning an object
const createObj = () => ({
    name: 'Brad'
});


const numbers = [1, 5, 6, 7, 8];

numbers.forEach(function (n) {
    console.log(n);
})

// Arrow function in callback
numbers.forEach(n => console.log(n));


console.log(add(3, 5));

console.log(subtract(5, 3));

console.log(double(2));

console.log(createObj());

