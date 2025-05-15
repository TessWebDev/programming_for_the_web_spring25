var pos;

function setup() {
    createCanvas(500, 500);
    background(0);
    angleMode(DEGREES); // Tells p5 that angles are in degrees

    pos = 0.0 //float value
    inc = 3.0 //increase position
    
}

function draw() {

    clear() // clears background when the circle moves back and fourth
    var mySinVal = sin(pos)
    amplified = mySinVal * 50

    // ellipse(mySinVal + 100, height/2, 50, mySinVal * 20) //circle in center of the screen, starts to rock back and fourth

    for (x = 0; x <= 360; x = x + 10) {

    }

    
    pos = pos + inc
}