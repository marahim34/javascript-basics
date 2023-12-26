// var, let, const


let firstName = 'John';
let lastName = 'Doe';


console.log(firstName, lastName);

let age = 30;
console.log(age);


age = 33;

console.log(age);


let score;

score = 190;
console.log(score);


if (true) {
    score = score + 1
}

console.log(score);


const x = 100;



// the value of const can not be reassigned
// const declaration must be initialized


const arr = [1, 2, 3, 4, 5];

arr.push(6);

console.log(arr);

// So we cannot directly reassigned the const, but we can manipulate'

const person = {
    name: 'Brad'
};

person.name = 'John';
person.email = 'john@gmail.com';

console.log(person);

// We can declare multiple values at once;

let a, b, c;

const d = 20,
    e = 30,
    f = 40;
