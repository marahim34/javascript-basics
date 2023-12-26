let i = 0;

// while(inside this parenthesis we have to put the conditions)
// We use for loop when the number of times the loop will run is known; but in while loop we don't know how many times the loop will be run

// while (i <= 20) {
//     console.log('Number ' + i);
//     i++
// };


// While loop also use when we run loop over arrays

const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++

// }

// Nesting while loops
while (i <= 5) {
    console.log('Number ' + i);

    let j = 1;
    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
};

// Do Loop
do {
    console.log('number ' + i);
    i++
} while (i <= 20);
