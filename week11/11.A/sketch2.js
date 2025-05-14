let cols, rows; let size = 4;
let t = 0; let speed = 0.05;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  cols = width / size;
  rows = height / size;
}

function draw() {
  background(0);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      let x = size/15 + i*size;
      let y = size/15 + j*size;
      let distFromCenter = dist(x, y, width/2, height/2);
      let dfcMod = floor(distFromCenter / 2 + t) % 4; // determines the design shape
      
      let hue = map(distFromCenter, 0, width/2, 0, 360);
      let brightness = map(distFromCenter, 0, width/2, 0, 200);
      noStroke();
      fill(100, 700, 900);
      
      if (dfcMod == 0) {
        ellipse(x, y, size/2);
      } else if (dfcMod == 1) {
        stroke(0, 0, brightness); //adds the plus signs
        strokeWeight(0.5);
        line(x - size/4, y, x + size/4, y);
        line(x, y - size/4, x, y + size/4);
      } 
      
    }
  }
  
  t += speed;
  
  
  
  
  
  
  
}


