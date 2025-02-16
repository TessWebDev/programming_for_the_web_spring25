let rectX = 0;
const rectHeight = 75;
let rectY;  //height is built in ----Its going to choose any number between 0 and height of canvas.
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight); //randome should be inside or after setup function.
    speed= random (1, 3); //first argument is min (aka 4), second argument is max (aka 3)
}

function draw () {
    background(155);
    drawShape();
    rectX += speed; // OR   want x=x+2
    if(rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if((mouseX >= 0 && mouseX<= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectHeight)) {    //why the double && ?
        clickCount++;
        console.log('hit', clickCount);
    }
    
}

function drawShape() {
    fill('pink');
    rect(rectX, rectY, rectWidth, rectHeight);
}
