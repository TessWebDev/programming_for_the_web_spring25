//Select empty div and assign it to a variable.
const myEmptyDiv = document.querySelector('#myEmptyDiv');
// 2 STEP PROCESS:
// 1. Put an h1 inside of it 
 //create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Baby llamas: A baby llama is called a cria, which is Spanish for "child".';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    console.log('heading has been clicked');
    document.body.style.backgroundColor = 'yellow';
}

