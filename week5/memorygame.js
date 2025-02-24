let myCard;
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
        this.show();
    }
    
    show () { //methods -- like functions, but specific to your class
        fill('rgb(57.7%, 9.9%, 9.9%)');
        rect(this.x, this.y, this.width, this.height, 10);
    }

    didHit (mouseX, mouseY){
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                return true;
            }   else {
                return false;
            }
        
    }
}