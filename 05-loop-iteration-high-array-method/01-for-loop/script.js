// for ([initialExpression]; [conditionalExpression]; [incrementExpression]) statement;


// Initial Expression - Initializes a variable/counter
// Conditional Expression - Conditions that the loop will continue to run as long as it is met or until the condition is false;
// Increment Expression - Expression that will be executed after each iteration of the loop. Usually increments the variable.
// Statement - Code that will be executed each time the loop is run. To execute a 'block' of code, use the '{}' syntax


for (let i = 0; i <= 10; i++) {
    // console.log(i);
}

// We can change the initial value; also the conditional expression and the increment statement like {i = 5; i <=100, i = i+2} something like that
// REMEMBER not to use const, because once you declare with const, you cannot change the value

for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is lucky number');
    }
    else {
        console.log('Number ' + i);
    }
}


// Nest loops
for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {

    if (i === 2) {
        // (name[i] === 'John)
        console.log('Sara is the Best');
    }
    else {
        console.log(names[i]);
    }

}