function setup() {
    createCanvas(1000, 800);
    background(0);
    let myCard = new Card();
}

class Card {
    constructor () {
         this.x = 100; //referenceing the x position, this is a property -- like variables but specific to your class
         this.y = 100;
         this.width = 80;
         this.height = 100;
    }
    
    show () { //methods -- like functions, but specific to your class
        fill('rgb(57.7%, 9.9%, 9.9%)');
        rect(this.x, this.y, this.width, this.height, 10);
    }
}