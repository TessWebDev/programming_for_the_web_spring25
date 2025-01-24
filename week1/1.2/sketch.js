function setup() {
  createCanvas(900, 700);
}

const myName = window.prompt("Circle or Square?"); //varible -- "hello" name -- bucket
        if(myName !== "square") {
        window.alert("circle");
        } else {
        window.alert("It is a circle, sorry.");
        }

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse (mouseX, mouseY, 80,80);
}