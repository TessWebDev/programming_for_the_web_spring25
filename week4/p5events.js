//how do events work in p5
const myRectangle = {
    x:100,
    y:100,
    width:150,
    height:100
}
function setup() {
    createCanvas(800, 600);
    background(220)
}

function draw() {
    rect(myRectangle.x myRectangle.y, myRectangle.width, myRectangle.height);

}

function mousePressed() {
    console.log(mouseX, mouseY);
}