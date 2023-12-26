// For example: You have a list of products with their individual values. Now you want to reduce that list down to a total price, thats somewhere we use reduce

// There are three arguments that need to be understood. 
// accumulator, currentValue

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// Larger version
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

// 0 is the initial value. So the sum starts at 0;
// Each element took the previous value, which is done under the accumulator. Every time function runs it takes the 

// Shorter version
const sum1 = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum, sum1);

// Using a for loop
const sum2 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc = acc + cur;
        // acc +=cur
    }
    return acc;
};

console.log(sum2());


const cart = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 120 },
    { id: 3, name: 'Product 3', price: 130 },
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price
}, 0);

console.log(total);
