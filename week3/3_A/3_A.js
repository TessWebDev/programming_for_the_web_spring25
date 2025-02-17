let rotateBy = 8;
function setup() {
    createCanvas(600, 600);
    background(0); // leaving the background here vs draw so it does not get wiped out when drawing is repeated.
    angleMode(DEGREES);
    //text message
    textFont('helvetica');
    textSize(48);
    fill("pink");
    text('Click to Complete Drawing');
}
function makeArm(rotateBy, stroke1, stroke2) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    //Large Bezier
    noFill();
    stroke(255);
    strokeWeight(1);
    //ellipse(150, 150 - alt, 150 / alt); // the coordinates are from the center --- can play around with #'s to make shapes more interesting
    bezier(alt - 10, alt * 10, alt + 400, alt - 10, alt * 100, 20, 40, 40);

    //square
    noFill();
    stroke(380);
    strokeWeight(4);
    square(80, 20 + alt, 100/alt)

}

function draw() {
    translate(300, 300); //resets the center
    rotate(rotateBy); //come back to this .... This is rotating by degrees
    makeArm(rotateBy);
    makeArm(255, 215, 0);
    rotateBy += 5;
}
function mousePressed() {
    noLoop();
}

