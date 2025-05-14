let rows; 
let cols;
let spacing = 25;

let size = []; 

function setup() {
  createCanvas(800, 800);
  rows = height/spacing;
  cols = width/spacing;

}

function draw() {

// Calculate the circle's coordinates.
  let x = random(0, 100);
  let y = random(0, 100);

  // Draw the circle.
  circle(x, y, 20);
  fill(random(255), random(255), random(255));
}
