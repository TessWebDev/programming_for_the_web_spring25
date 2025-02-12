//HTML -- Bones, CSS-- Skin, Java script -nervouse system
//what is DOM
console.log(window.document.body.children); //.children (an array) lets you see all of the items (attributes, etc.) in the body of your HTML
//1. accessing existing element and changing them.
//2. adding new elements to existing elements.
console.log(window.document.body.children[1]);
//helpers to "find" html element
//getElementsByTagName
//console.log(document.getElementByTagName(div));

//getElementById
//console.log(document.getElementById("target")); 

//getElementClassName
const target= document.getElementById("target");
console.log(target);
target.classList.add("red");
target.style.width="200px";
target.style.height="200px";
target.style.color="white";
target.style.fontSize="36px";
target.innerHTML = "DOM Scripting for the win";

const colors = ['orange', 'green', 'blue', 'indigo', 'violet']
for(let loopVar = 0; loopVar < colors.length; loopVar++) {
    const newDiv1 = document.createElement("div");
        newDiv1.style.width = "50px";
        newDiv1.style.height = "50px";
        newDiv1.style.backgroundColor = "orange";
        target.appendChild(newDiv1);
}

const newDiv1 = document.createElement("div");
    newDiv1.style.width = "50px";
    newDiv1.style.height = "50px";
    newDiv1.style.backgroundColor = "orange";
    target.appendChild(newDiv1);

//Event and event handlers
target.addEventListener("click", () => {
    console.log("I've been clicked");
    document.body.style.
});
window.addEventListener("load", () => {
    console.log("window has loaded");
})