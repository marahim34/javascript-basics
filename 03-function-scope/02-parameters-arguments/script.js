// When can allow data to be passed in functions by creating parameters and the data we passed in when we invoke the function are called the arguments

// First way
// function registerUser(user) {
//     return user + ' is registered'
// };

// console.log(registerUser('John'));

// Second way
// function registerUser(user) {
//     if (!user) {
//         user = 'Bot'
//     }
//     return user + ' is registered'
// };


// Third way to give default user
function registerUser(user = 'Bot') {
    return user + ' is registered'
};


console.log(registerUser());


// Rest parameters
function sum(...numbers) {
    // return numbers;

    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));


// Object as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`
};

const user = {
    id: 1,
    name: 'John'
};

console.log(loginUser(user));

console.log(loginUser({
    id: 2,
    name: 'Kabir'
}));


// Arrays as params
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom(1, 2, 3, 4, 5, 6, 7)