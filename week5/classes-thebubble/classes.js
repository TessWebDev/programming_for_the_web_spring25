// let bubble;   //bubble is the made up name for a class
//     this.x = 300;
//     this.y = 200;
let bubble1;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble(200, 200, 40); // the numbers are the arguments (the values passed in.) 
    bubble2 = new Bubble(400, 200, 20);
}


function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();

}

class Bubble {        ////THE DATA
    constructor(x, y, r) {   ///the parameters, the variables that go inside the actuallt def on the constructor
        this.x = x;    /// this.x -- aka bubble.x, etc.
        this.y = y;  
        this.r = r;
    }


    move() {
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
    }

        show() {
            stroke(255);
            strokeWeight(4);
            noFill();
            ellipse(this.x, this.y, this.r * 2)
    }

}
 



