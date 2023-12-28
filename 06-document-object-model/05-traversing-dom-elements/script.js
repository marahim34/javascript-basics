let output;

// Get child element
const parent = document.querySelector('.parent');

output = parent.children;

// Getting the elements properties, texts, classname from parents
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

// Changing the elements with the index of elements
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'blue';

// Changing first element and last element from the parent
parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Getting parent element from a child
const child = document.querySelector('.child');

output = child.parentElement;

child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Grab the sibling elements
const secondItems = document.querySelector('.child:nth-child(2)');

output = secondItems;
output = secondItems.nextElementSibling;

console.log(output.nextElementSibling);