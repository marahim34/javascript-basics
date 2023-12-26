// convert string to number

let amount = '130';

console.log(amount, typeof amount);

// First method of coversion PaseInt 
amount = parseInt(amount);

// Second way of conversion is putting a plus sign before
amount = +amount;

// Third way is to put the number constructor
amount = Number(amount);

console.log(amount, typeof amount);


// convert Number to String
let amounts = '144.5';

// First way is use the toString
amounts = amounts.toString();

// Second way String Constructor
amounts = String(amounts);

console.log(amounts, typeof amounts);

// convert string to deciaml

amounts = parseFloat(amounts);

console.log(amounts, typeof amounts);


// Convert numbers to boolean

// O is only one value that will be considered as false
let bool = 1;

bool = Boolean(bool);

console.log(bool, typeof bool);


