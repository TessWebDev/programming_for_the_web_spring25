function setup() {
    createCanvas(500, 500) ;
    background(0);
}

function draw() {
    fill("purple");
    //circle
    //ellipse(100, 100, 100);
    
    //rectangle
    rect(100, 100, 50, 50)
}
function mousePressed() {
    console.log(mouseX, mouseY);
    //for circle
    const distance = dist(mouseX, mouseY, 100, 100);
    // console.log(distance);
    // if(distance < 50) {
    //     alert('You hit it!');
    // }
    //rectangle hit testing
    if((mouse >= 100 && mouseX <= 150) && (mouseY >= 100 && mouseY <= 150)) {
        console.log('You have the X');
    }
}


// let startingX = 200;
// let startingY = 100;
// let myCircles = [];
// let startingId = 0;
// function setup () {
//     createCanvas(1000, 500);
//     background(0);
//     // ellipse(circleX, circleY, circleDiameter);
//     for (let k = 0; k < 2; k++) {
//         for (let i = 0; i < 4; i++) {
//             ellipse(startingX, startingY, circleDiameter);
//             myCircles.push({ x: startingX, y: startingY, id: startingId });
//             startingX += 150;
//             startingId++;
//         }
//         startingY += 150;
//         startingX = 200;
//     }
    
//     console.log(myCircles);
// }