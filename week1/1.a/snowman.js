let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercare", "gray");
let stroke2 = prompt("enter another basic color lowercase", "yellow");
function setup() {
    createCanvas(1000,800);
    background("#ccc");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    // background(grid);
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    //left leg
    ellipse(350, 650, 200);
    //right leg
    ellipse(650, 650, 200);
    //snow body
    ellipse(500, 450, 350, 400);
    //head
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    //hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    //eyes
    stroke(0);
    strokeWeight(50);
    //left
    point(425, 200);
    //right
    point(575, 200);
    //mouth
    noFill();
    strokeWeight(10);
    arc(500, 200, 80, 80, 0, HALF_PI); //HALF_PI is a quarter of a circle.

}