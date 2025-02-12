let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background(0); // leaving the background here vs draw so it does not get wiped out when drawing is repeated.
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 - alt); // the coordinates are from the center --- Why does this have to be below the other items?
}

function draw() {
    translate(300, 300); //resets the center
    rotate(rotateBy); //come back to this .... This is rotating by degrees
    makeArm(rotateBy);
    rotateBy += 5;
}

