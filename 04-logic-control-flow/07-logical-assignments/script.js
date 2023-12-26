// || assigns the right side value only if the left is a falsy value

let a = false;

if (!a) {
    a = 10;
}

// To write the above in shorthand is as following
a = a || 10;

// Or 
a ||= 10;

console.log(a);

// && assigns the right side value only if the left is a truthy value
let b = 20;

if (b) {
    b = 30
};

// or 
b = b && 40;

// or 
b &&= 50;

console.log(b);

// ?? assigns the right side value only if the left is null or undefined

let c = null;

if (c === null || c === undefined) {
    c = 30;
}

// or 
c = c ?? 40;

// or
c ??= 50;


console.log(c);