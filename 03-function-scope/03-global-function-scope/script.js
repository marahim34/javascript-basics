// Global variables are accessible from anywhere, whether it is in a function, or in a block.

// alert('Hello');

// console.log(window.innerWidth);

// We can access the windows property from anywhere

const x = 100;

console.log(x, 'in global');

function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function');
};

run();

if (true) {
    console.log(x, 'in the block');
};

// Function scope
function add() {
    const y = 50;
    console.log(y);
    console.log(x + y);
};

add();