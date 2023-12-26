// forEach() method of Array instances executes a provided function once for each array element.

const socials = ['Twitter', 'Face Book', 'Tik Tok', 'LinkedIn', 'Instagram'];

console.log(socials.__proto__);

// socials.push('Dracula');

console.log(socials);

socials.forEach(function (social) {
    console.log(social);
})

// This method takes an callback function. It is not gonna be named.
// Generally we use the singular version of elements inside the function name

// Instead of the above calling using the function, we can also all the forEach loop in the following way

socials.forEach((social) => console.log(social))

// In addition to item/element (i.e., social) we can also pass some other arguments. For example, 
// i. index: the current element being processed in the array.
// ii. array: The array forEach was called upon

// For example
socials.forEach((social, index, arr) => console.log(`${index} - ${social}`, arr));


function logSocial(social) {
    console.log(social);
}

// socials.forEach(logSocial);

// For Objects
const socialObjs = [
    { name: 'Twitter', url: 'https://www.twitter.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com' },
    { name: 'Instagram', url: 'https://www.instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));