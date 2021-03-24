let squareX;
let squareY;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(40);
    frameRate(4);
}

function draw() {
    squareX = random(width);
    squareY = random(height);

    fill(random(256), 0, random(123));
    noStroke();
    square(squareX, squareY, random(300));

}