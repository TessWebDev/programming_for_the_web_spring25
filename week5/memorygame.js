
const DOWN = 'down'; //const because it will not change
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = []; //start an array to push all cards into
const gameState = {

};
function setup() {
    createCanvas(800, 600);
    background(0);
    for (let j = 0; j < 2; j++) { //this is the loop to create a row.
        for (let i = 0; i < 5; i++) {
            cards.push(new Card(startingX, 
            startingY)); // new Card is the new instance (or the cookie)
            startingX += 120; // increment starting X 
        }
        //outter loop
        startingY += 150; //the 120 is the space between the rows
        startingX = 100;  //will get weird behavior unless you add this startingX back to what it was.

    }

}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards [k].didHit(mouseX, mouseY)) {
            console.log('flipped');
        }
    }
}

class Card {
    constructor (x, y) { //make parameters in ()
        this.x = x; //referenceing the x position, this is a property -- like variables but specific to your class
        this.y = y;
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
            fill('#aaa'); //the back of card
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