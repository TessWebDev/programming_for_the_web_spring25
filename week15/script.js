let img;
let gif;


function preload() {
  // Load the image (replace with your actual image path)
  img = loadImage('./images/Logo.jpg');

  // Load the GIF (replace with your actual GIF path)
  gif = loadImage('.images/chair_gif.gif');
}

function setup() {
  createCanvas(1850, 900); // Adjust canvas size as needed

  // Calculate dimensions (optional, but useful for positioning)
  imageWidth = img.width;
  imageHeight = img.height;
  gifWidth = gif.width;
  gifHeight = gif.height;
  
    // Resize the image, keeping the aspect ratio.
  img.resize(900, 900);
}

function draw() {
  background(255,255,255); // Set background color

  // Draw the image (e.g., on the left)
  image(img, 20, 20, imageWidth, imageHeight);

  //Draw the GIF (e.g., on the right)
  image(gif, imageWidth + 15, 0, gifWidth, gifHeight);

  // Set the GIF frame for animation (example: loop through frames)
  gif.setFrame();  
  
  
  
  // Optional: Add some spacing between the image and GIF
  image(gif, imageWidth + 19, 0, gifWidth, gifHeight);
  
}

// Pause the GIF when the user presses the mouse.
function mousePressed() {
  gif.pause();
}

// Play the GIF when the user presses the mouse.
function mouseReleased() {
  gif.play();
}

//video

