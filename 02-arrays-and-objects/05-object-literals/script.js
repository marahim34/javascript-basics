let xl

const person = {
    name: 'Miguel Smith',
    age: 30,
    location: 'Tampere',
    isAdmin: true,
    address: {
        street: '123 main street',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports']
};

// keys and values of objects; values are also known as properties, like name properties, age properties etc.

x = person.name;

x = person['age'];

x = person.address.state;

x = person.hobbies[0];
// Reassigning value
person.name = 'Margaret Smith';

person['isAdmin'] = false;
// Deleting particular property
delete person.age;
// Adding new property
person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

const person1 = {
    firstName: 'Brad',
    lastName: 'Pit'
};

x = person1.firstName;


console.log(x);