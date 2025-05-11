
import './App.css'


  function setup() {
    createCanvas(800, 800); // canvas
    angleMode(DEGREES); // lets use degrees instead of radians
    rectMode(CENTER); // lets our rectangles starts from center
    ctx = drawingContext; // this one is for using native Js canvas features
    x = width / 2; // x coordinate of center of canvas
    y = height / 2; // y coordinate of center of canvas
  }

export default App
