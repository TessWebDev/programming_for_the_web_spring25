var song;
var slider;
var button;

function preload() { // pre set up to the audio, loaded before everything else.
    song = loadSound("./sounds/ding.mp3")
}

function setup() {
    createCanvas(400, 400);
    background (0);
    slider = createSlider(0, 1, 0.5, 0.01);
    song.play(); // can't rely on this, might not load in time.
    song.setVolume(0.5);
    button = createButton("Play")
    button.mousePressed(togglePlaying);
}

function draw() {
    background(0);
    song.setVolume(slider.value())

}