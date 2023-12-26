function sayHello() {
    console.log('Hello World!');
};

sayHello();
// This is invoking or calling a function

function add(num1, num2) {
    // in above num1 and num2 are parameters
    console.log(num1 + num2);
};

add(3, 4);
// in above 3 and 4 are arguments




// Functions are supposed to return something. In the above examples, they return console logs. The following examples are written considering that they will give outputs

// *You can use same function parameters in different functions

function subtract(num1, num2) {
    return num1 - num2

    console.log('After the return');
};

const result = subtract(10, 5);

console.log(result, subtract(20, 6));