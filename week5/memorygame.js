
const DOWN = 'down'; //const because it will not change
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = []; //start an array to push all cards into ... this is an array
const gameState = {
    totalPairs: 0,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false

};

let cardFaceArray = [];
let cardBack; //variable
function preload() {
    cardBack = loadImage('images/Doyle_05.png');
    cardFaceArray = [
        loadImage ('images/card1.png'), // first argument is the path to the image.
        loadImage ('images/card2.png'),
        loadImage ('images/card3.png'),
        loadImage ('images/card4.png'),
        loadImage ('images/card5.png'),
        loadImage ('images/card6.png')
    ]
}
function setup() {
    createCanvas(2000, 1200); //size of canvas (background)
    background(0); // color of background
    let selectedFaces = [];
    for (let z = 0; z < 6; z++ ) {  // z is the loop
            const randomIdx = floor(random(cardFaceArray.length));
            const face = cardFaceArray[randomIdx];  //choosing random face from cardfacearray
            selectedFaces.push(face);  //pushing it twice, that is why there are two of these lines.
            selectedFaces.push(face);
            //remove the used cardface so it doesn't get randomly selected again.
            cardFaceArray.splice(randomIdx, 1);   //splice takes the index and how many you want to remove, aka 1.
    }   
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 2; j++) { //this is the loop to create a row.
        for (let i = 0; i < 6; i++) { // the 6  is how many cards there are.
            const faceImage = selectedFaces.pop(); //if you call pop (pop removes the last item in the array) and then returns the item that gets removed.
            cards.push(new Card(startingX, 
            startingY, faceImage)); // new Card is the new instance (or the cookie)
            startingX += 300; // increment starting X by a number
        }
        //outter loop
        startingY += 450; //the number is the space between the rows
        startingX = 100;  //will get weird behavior unless you add this startingX back to what it was. Where the new row starts.

    }

}

function mousePressed() { // THIS FLIPS THE CARDS
    for (let k = 0; k < cards.length; k++) {  //the loop through the cards
        if(gameState.flippedCards.length < 2 && cards [k].didHit(mouseX, mouseY)) { // the array name is cards, with a loop number     gameState.flippedCards.length < 2 -- allows you to only flip two cards at a time.
            gameState.flippedCards.push(cards[k]);
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) { //make parameters in ()
        this.x = x; //referenceing the x position, this is a property -- like variables but specific to your class
        this.y = y;
        this.width = 300;
        this.height = 400;
        this.face = DOWN; //the cards starting out as face down
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    
    show () { //methods -- like functions, but specific to your class
        if(this.face === UP || this.isMatch) {  // || means or
            fill('#aaa'); //the face of card (the different images)
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x , this.y + 2.5); //shows the image on the face of the card, variable = cardback, location -- x,y THE NUMBERS + helps position the image.
            
        } else {
            // fill('rgb(57.7%, 9.9%, 9.9%)');
            // rect(this.x, this.y, this.width, this.height, 10);    //I TOOK THIS OUT BECAUSE I AM USING WHOLE IMAGE I DESIGNED -- I NO LONGER NEED THE RED.
            image(cardBack, this.x, this.y); //shows the image on the back of the card, variable = cardback, location -- x,y   
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

 // THE SHUFFLE // // In its own class -- {}
 function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //Pick random index (item)
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter]; //temp is a variable
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
    
}