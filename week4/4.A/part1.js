//circle or ellipse
const circleDiameter = 100;
let circleX = 200;
let circleY = 300;
function setup() {
    createCanvas(500, 500) ;
    background(0);
    //ellipse
   ellipse(circleX, circleY, circleDiameter);
}

 function mousePressed() {
    for(let j =0; j , myCircles.length; j++) {
        let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
        if (distance < circleDiameter / 2) {
            console.log('circle has been click', myCircles[j].id);
         }
    }
 }


let startingX = 200;
let startingY = 100;
let myCircles = [];
let startingId = 0;
function setup () {
    createCanvas(1000, 500);
    background(0);
    // ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 4; i++) {
            ellipse(startingX, startingY, circleDiameter);
            myCircles.push({ x: startingX, y: startingY, id: startingId});
            startingX += 150;
            startingId++;
        }
        startingY += 150;
        startingX = 200;
    }
    
    console.log(myCircles);
}


//  const rectWidth = 200; 
//  let rectX = 100;
//  function setup() {
//      createCanvas(500, 500) ;
//      background(0);
//      //rectangle
//     rect(rectX, 100, rectWidth, 200)
//  }

// function mousePressed() {
//     // console.log('Moused Pressed', mouseX, mouseY);
//     if (mouseX > rectX && mouseX < rectX + rectWidth  && mouseY > 100 && mouseY < 300 ) {
//         console.log('square has been hit');
//     }
// }
 

// function mousePressed() {
//     console.log(mouseX, mouseY);
//     //for circle
//     const distance = dist(mouseX, mouseY, 100, 100);
//     // console.log(distance);
//     // if(distance < 50) {
//     //     alert('You hit it!');
//     // }
//     //rectangle hit testing
//     if((mouse >= 100 && mouseX <= 150) && (mouseY >= 100 && mouseY <= 150)) {
//         console.log('You have the X');
//     }
// }
