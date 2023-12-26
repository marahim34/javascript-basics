// Take the people array and create an array called youngPeople that stores objects only name and email properties of all people that are 25 and under, the name property should have their first and last name;


const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-222-3333',
        age: 30
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '222-222-3333',
        age: 45
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '111-222-3344',
        age: 25
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gmail.com',
        phone: '333-222-3344',
        age: 19
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '333-222-4444',
        age: 23
    },
];

const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
        name: `${person.firstName} ${person.lastName}`,
        email: person.email
    }))

console.log(youngPeople);


// Challenge 2
// Add all the positive numbers in the array

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
    .filter((number) => number > 0)
    .reduce((acc, cur) => acc + cur, 0)

console.log(positiveSum);


// Challenge 3
// Create a new array called capitalizedWords with the words array with the first letter of each word capitalized

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(word => {
    return word.charAt().toUpperCase() + word.slice(1)
});

console.log(capitalizedWords);