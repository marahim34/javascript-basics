// ANYTHING that is not falsy is truthy. 

const email = 'test@test.com';

if (email) {
    console.log('You passed in an email');
}
// In the above example the email is evaluated as truth. So, when we passed something in the if statement, it is coerced into the values of boolean. for example

console.log(Boolean(email));
// The above is returning a boolean. Because a string with anything in it is a truthy value;


// Truthy value:
/*
1. a string with anything in it is a truthy value; It will always gonna return a truthy value
2. Anything other than the falsy values are considered as truthy values.
3. true
4. '0' [0 in the string]
5. ' ' [space in a string]
6. 'false' [false in a string]
7. [] [empty array]
8. {} [empty object]
9. function(){} [empty function]
*/



// Falsy values
/*
1. false
2. 0
3. "" or '' (Empty String)
4. null
5. undefined
6. NaN
*/

// For example
const x = '[]';

if (x) {
    console.log('This is truthy value');
}
else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// You can pass any falsy values, and all the values will return a falsy value. For example: the following. Likewise 0 you can also put other values
const y = '';

if (y) {
    console.log('This is truthy value');
}
else {
    console.log('This is falsy');
}

console.log(Boolean(y));


// Truthy and Falsy caveats\
const children = 0;
if (children !== undefined) {
    // or (!NaN(children))
    console.log(`you have ${children} children`);
}
else {
    console.log('Please enter valid number of children');
};


// Checking for empty arrays
const posts = [];

console.log(posts.length);

if (posts.length > 0) {
    console.log('List Posts');
}
else {
    console.log('No Posts');
}


// checking for empty objects
const user = {
    name: 'Brad'
};

if (Object.keys(user).length > 0) {
    // Since we cannot determine the length directly from the object likewise the array, we need to first find the keys of the object and then apply the length
    console.log('List User');
}
else {
    console.log('No User');
}

// Loose equality [always use === instead of ==]
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
