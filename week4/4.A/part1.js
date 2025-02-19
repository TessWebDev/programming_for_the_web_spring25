


let startingX = 200;
let startingY = 100;
let myCircles = [];
let startingId = 0;
function setup () {
    createCanvas(1000, 500);
    background(0);
    // ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 4; i++) {
            ellipse(startingX, startingY, circleDiameter);
            myCircles.push({ x: startingX, y: startingY, id: startingId });
            startingX += 150;
            startingId++;
        }
        startingY += 150;
        startingX = 200;
    }
    
    console.log(myCircles);
}