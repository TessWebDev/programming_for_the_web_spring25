//Select empty div and assign it to a variable.
const myEmptyDiv = document.querySelector("myEmptyDiv");
// 2 STEP PROCESS:
// 1. Put an h1 inside of it 
 //create a new element
const heading= document.createElement('h1');
heading.innerHTML = 'Hello Houston! It is a hot and humid day!';

heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);


