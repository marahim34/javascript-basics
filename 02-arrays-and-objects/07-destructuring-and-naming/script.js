const firstName = 'Miguel';
const lastName = 'David';
const age = 30;


const person = {
    firstName,
    lastName,
    age
};

console.log(person.age);

// Destructuring
const todo = {
    id: 1,
    title: 'Trash Man',
    user: {
        name: 'Julerime',
    }
};

const {
    id: todoId,
    title,
    user: {
        name
    }
} = todo;


console.log(todoId);

// Destructuring arrays
const numbers = [11, 22, 33, 44, 55, 66];
// we can also use ...nums instead of rest as given below
const [first, second, third, ...rest] = numbers;

console.log(first, second, third, rest);