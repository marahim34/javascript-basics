/*
- What is the Document Object Model?
--- Programming interface for web/html elements
--- Dom is the Structure of the webpage that we can interact with via JavaScript
--- Includes all html tags, attributes, text nodes, etc.
--- It is visualized as a tree structure
*/

// Window is the topmost of global object in the browser. We can access it through the console

console.log(window);

// document is in the window object 

console.dir(window.document);

console.log(document.body.innerText);
console.log(document.body.innerHTML);
console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello World </h1>'

// This is a method
// document.write('Hello from JS');

// Some helpful methods
console.log(document.getElementById('main'));

const main = document.getElementById('main');
// main.innerHTML = '<h>Hello from MAIN </h1>'

// qurery selector
document.querySelector('#main h1').innerText = 'Hello';