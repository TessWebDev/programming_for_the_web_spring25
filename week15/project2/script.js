img1
img2
img3

let chair =[];

function preload() {
    chair[0] = loadImage('1.png');
    chair[1] = loadImage('2.png');
    chair[2] = loadImage('3.png');
    chair[3] = loadImage('4.png');
    chair[4] = loadImage('5.png');
    chair[5] = loadImage('6.png');
}

function setup() {
    createCanvas(chair[0].width, chair[0].height);
    background(0);
}

function draw() {
    let i = int(random(6));
    print(i);

    image(chair[0], 0, 0);
}

