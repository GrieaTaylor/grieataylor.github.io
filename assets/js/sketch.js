var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position (0, 0);
  canvas.style('z-index', '1')
  noFill()
  ;
}

function mousePressed() {
	clear();
}

function draw() {
  fill (mouseX, mouseY, 240);
  noStroke (

);
 ellipse(pmouseX, pmouseY, 40, 40 );
}
