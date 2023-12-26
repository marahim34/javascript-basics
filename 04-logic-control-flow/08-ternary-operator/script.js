const age = 17;

// using an if statement 

if (age >= 18) {
    console.log('You can vote');
}
else {
    console.log('You cannot vote');
};

// using a ternary operator
age >= 18 ? console.log('You can vote!!!') : console.log('You can not vote');

// Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';

console.log(canVote);
console.log(canVote2);


// Multiple statements
const auth = true;

// let redirect;

// long version
// if (auth) {
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard'
// }
// else {
//     alert('access denied')
//     redirect = '/login'
// };

const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access denied'), '/login')

console.log(redirect);


// And operator
auth ? console.log('welcome to dashboard') : null;

auth && console.log('Welcome to DASHBOARD');