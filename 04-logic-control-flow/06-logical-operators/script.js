console.log(10 > 20 && 30 > 15 && 40 > 30);
// The above example gives a false output, because in order to give a true output it needs all true value; Since the first logic of the above console is false it gives false in output. When we use < we will get true value.

console.log(10 > 20 || 30 > 15);
// The above example will give true as output. Because || means one or the other where acceptability of one value gives true output, although the other one is not true

// && will return first falsy value [if there is falsy value] or the last value [if there is no falsy value]
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 30;

console.log(a);

// const posts = ['Post One', 'Post Two'];
const posts = [];

posts.length > 0 && console.log(posts[0]);

// || will retrun the first truthy value or the last value

let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);


// ?? - returns the right side operand when the let is null or undefined. REMEMBER IT ONLY WORKS WITH null and undefined

let c;
c = 10;
c = 10 ?? 20;
c = null ?? 20;

console.log(c);
