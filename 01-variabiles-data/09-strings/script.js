let x;

const name = 'John';
const age = 33;

// Concatenate
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old.`

// String properties and methods
const s = new String('Hello World');

x = typeof s;

// x = s.length;

x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('l');

x = s.substring(2, 5);

x = s.slice(0, 5);
x = s.slice(-11, -6);

x = '              MurolinKatu';
x = s.trim();

x = s.replace('World', 'Katu');

x = s.includes('World');

x = s.valueOf();

x = s.split('');

console.log(x);