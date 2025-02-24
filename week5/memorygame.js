let myCard;
const DOWN = 'down'; //const because it will not change
const UP = 'up';
function setup() {
    createCanvas(800, 600);
    background(0);
    myCard = new Card();
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor () {
        this.x = 100; //referenceing the x position, this is a property -- like variables but specific to your class
        this.y = 100;
        this.width = 80;
        this.height = 100;
        this.face = DOWN; //the cards starting out as face down
        this.show();
    }
    
    show () { //methods -- like functions, but specific to your class
        if(this.face === DOWN) {
            fill('rgb(57.7%, 9.9%, 9.9%)');
            rect(this.x, this.y, this.width, this.height, 10);
        } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
        }
        
    }

    didHit (mouseX, mouseY){
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip(); // the flip call
                return true;
            }   else {
                return false;
            }
        
    }
    flip () { // checks to see what the state of the face direction is and then call show
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}