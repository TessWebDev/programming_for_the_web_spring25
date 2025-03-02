let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 2; // the function will execute after the time set (50 or speed) and will continue to execute until we clear it.
const distance = 2;

function setup () {
    createCanvas(500, 500);
    background(255, 215, 0);    
}

//the rectangle
function drawBlock(x, y, color) {
    fill(color || 255); // either use the color as a parameter -- if it doesn't exist, it'll go to white (255)
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {  //NaN -- Not a Number
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);  // mapping to a value of grey. (low, high, low output, high output)
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;

}
window.setTimeout(() => {   //setTimeout only occures once.
    drawTimer = window.setInterval(() => {  // setInterval will continue to run, until its told not to.
        if (blockY - 50 <= height) {
            drawBlock(blockX, blockY, blockColor); //1st argument is a function, 2nd argument is an interval
            blockY += distance;
        } else {
            blockY = 0; // stops the block from moving off the canvas
            blockX += 50;
        }
        if (blockY - 50 > height && blockX - 50 > width) {    // clearing an interval
            //cancels timer
            window.clearInterval(drawTimer);
            alert('done');
        }
    }, speed);  // the function will execute after the time set (speed) and will continue to execute until we clear it.
}, 1500);
