function setup() {
    createCanvas(200, 200); //making the size of the canvas (aka size of the tile)
}

function createTile() {
    translate(0, 0); //the "z" would make it 3D EX: (0, y, z)
    fill('orange');
    rect(0, 0, 200, 200); //rect = rectangle EX: (x, y, w, h)
    stroke('yellow'); // This creates a line
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    
    fill('blue');
    stroke('yellow');
    strokeWeight(3);
    rect(25, 25, 50, 50);
    rect(25, 125, 50, 50);
    rect(125, 125, 50, 50);
    rect(125, 25, 50, 50);
    

    noStroke(); //take away the lines on all the following objects
    fill('green');
    circle(100, 50, 50); //does not take a WxH, just a diameter EX: (x, y, diameter)
    circle(50, 100, 50); //(x, y, diameter)
    circle(150, 100, 50); //(x, y, diameter)
    circle(100, 150, 50); //(x, y, diameter)

}

 function draw() { // This calls the item to show up on the screen.
    createTile();
 }