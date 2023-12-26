// Loop through arrays
const items = ['Book', 'Table', 'Pen', 'Laptop', 'Pencil', 'Chair'];


// If we work with for loop we will do it in the following way
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// Now when doing the same in FOR OF LOOP
for (const item of items) {
    console.log(item);
}

// For of is much more cleaner and much more modern

// Loop through arrays
const users = [
    { name: 'Brad' },
    { name: 'Steve' },
    { name: 'John' },
    { name: 'Murad' },
];

for (const user of users) {
    console.log(user);
    console.log(user.name);
}


// However, forEach is highly recommended

// For Of is also used to loop over strings


//Loop over strings 
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('name', 'John')
map.set('age', '30');

for (const [key, value] of map) {
    console.log(key, value);
}