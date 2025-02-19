let grey = 60;
function myIntervalFunction() {
    if(gray < 255) {
        gray += 15;
    } else {
        gray = 0
    }
    console.log("hello", new Date())
}

const myInterval = window.setInterval(myIntervalFunction, 2000);
cancelButton.addEventListener("click", () => {
    window.clearInterval(myInterval);
})

//discuss classes and OOP
//the point of the constructor allows you to do special configuration
//constructor takes arguments
//class Auto {
    // color = "red";  //these are arguments  --- put them in parentheses ()
//     model = "Honda";
// }

class Auto {
    constructor (model, color) {
        this.color = color;
        this.model = model;
    }
}
const myCar = new Auto("Honda");

function setup() {
    createCanvas(800, 800);
    background("#f1f1f1");
}
function draw() {

}