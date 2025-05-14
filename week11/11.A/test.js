let rows; 
let cols;
let spacing = 25;

let size = []; 

function setup() {
  createCanvas(800, 800);
  rows = height/spacing;
  cols = width/spacing;
  
   for (let i=0; i<cols; i++){
    size[i] = [];
     for (let j=0; j<rows; j++){
       // size[i][j] = (spacing-2)*((i+1)/cols);
       size[i][j] = (spacing)*((j+1)/rows);
       // size[i][j] = (spacing-2)*((rows-j)/rows);
     }
   }
}

 function draw() {
   background(240);
   for (let i=0; i<cols; i++){
     for (let j=0; j<rows; j++){
       noStroke();
       fill(random(255), random(255), random(255));
       ellipse(spacing/2+i*spacing, spacing/2+j*spacing, size[i][j], size[i][j]);
     }
   }
 }
 function mousePressed() {
     drawPattern();
 }