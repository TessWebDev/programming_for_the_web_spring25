
var button;

function setup() {
  createCanvas(600, 600);
  background(220);

  screamOne = loadSound("./sounds/man-scream1.mp3");
  screamTwo = loadSound("./sounds/woman-scream1.mp3");
  screamThree = loadSound("./woman-scream2.mp3");
  // chirp = loadSound("./sounds/mixkit-double-little-bird-chirp-21.mp3");
  // cricketSound = loadSound("./sounds/mixkit-cricket-chirp-1927.mp3");
}

function draw() {
  ladyOne();
  ladyTwo();
  ladyThree();
  // ladyFour();
  // bird();
}

function ladyOne() {
  button = createImg("./lady-images/girl1.png");
  button.position (50, 50);
  button.size (125, 100);
  button.mousePressed(screamOnePlay);
  noLoop();
}
function ladyTwo() {
  button = createImg("./lady-images/girl2.png");
  button.position (275, 155);
  button.size (125, 100);
  button.mousePressed(screamTwoPlay);
  noLoop();
}
function ladyThree() {
  button = createImg("./lady-images/girl3.png");
  button.position (50, 325);
  button.size (125, 100);
  button.mousePressed(screamThreePlay);
  noLoop();
}
// function crickets() {
//   button = createImg("./imgs/Adobe Express - file.png");
//   button.position (300, 400);
//   button.size (125, 100);
//   button.mousePressed(cricketSoundPlay);
//   noLoop();
// }
// function bird() {
//   button = createImg("./imgs/Adobe Express - file (1).png");
//   button.position (450, 100);
//   button.size (125, 100);
//   button.mousePressed(chirpPlay);
//   noLoop();
// }

function screamOnePlay() {
  screamOne.play();
}
function screamTwoPlay() {
  screamTwo.play();
}
function screamThreePlay() {
  screamThree.play();
}
// function chirpPlay() {
//   chirp.play();
// }
// function cricketSoundPlay() {
//   cricketSound.play();
// }
