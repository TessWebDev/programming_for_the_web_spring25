let cols, rows; let size = 8;
let t = 0; let speed = 0.01;

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
      let x = size/2 + i*size;
      let y = size/2 + j*size;
      let distFromCenter = dist(x, y, width/2, height/2);
      let dfcMod = floor(distFromCenter / 20 + t) % 2; // determines the design shape
      
      let hue = map(distFromCenter, 0, width/2, 0, 360);
      let brightness = map(distFromCenter, 0, width/2, 100, 50);
      noStroke();
      fill(200, 200, 500);
      
      if (dfcMod == 0) {
        ellipse(x, y, size/2);
      } else if (dfcMod == 1) {
        stroke(0, 0, brightness);
        strokeWeight(0.3);
        line(x - size/4, y, x + size/4, y);
        line(x, y - size/4, x, y + size/4);
      } 
      
    }
  }
  
  t += speed;
  
  
  
  
  
  
  
}


