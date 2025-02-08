function setup() {
    createCanvas(600, 600); //making the size of the canvas (aka size of the tile)
}

function createTile(originX, originY, primaryColor, secondaryColor, circleOutlineColor, dotColor) {
    translate(originX, originY); //the "z" would make it 3D EX: (0, y, z)
    fill('primaryColor');
    rect(0, 0, 200, 200); //rect = rectangle EX: (x, y, w, h)
    stroke('secondaryColor'); // This creates a line
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    
//blue circles
    fill('dotColor');
    stroke('circleOoutlineColor');
    strokeWeight(3);
    rect(25, 25, 50, 50);
    rect(25, 125, 50, 50);
    rect(125, 125, 50, 50);
    rect(125, 25, 50, 50);
    
//green squares
    noStroke(); //take away the lines on all the following objects
    fill('green');
    circle(100, 50, 50); //does not take a WxH, just a diameter EX: (x, y, diameter)
    circle(50, 100, 50); //(x, y, diameter)
    circle(150, 100, 50); //(x, y, diameter)
    circle(100, 150, 50); //(x, y, diameter)

}

 function draw() { // This calls the item to show up on the screen.
    createTile(0, 0, 'white', 'orange');
    createTile(0, 200);
    createTile(0, 200);
    //second column
    createTile(200, -400, 'cyan', 'yellow');
    createTile(200,)
 }