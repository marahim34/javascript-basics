let x;

// const todo = {};

// Object constructor

const todo = new Object();

todo.id = 1;
todo.name = 'Rishi Kapoor';
todo.completed = 'false';

x = todo;

const person = {
    address: {
        coords: {
            lat: 43.23323,
            lng: -71.4746324,
        }
    }
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2)

const todos = [
    { id: 1, name: 'Miguel' },
    { id: 2, name: 'Tablie' },
    { id: 3, name: 'chatu' },
]

x = todos[2];

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('name');
x = todo.hasOwnProperty('age');

console.log(x);