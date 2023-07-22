let position = 325;
let angle = 0.01;
let radius = 300;
let speed = 0.1;

function setup(){
  createCanvas(800,600);
  frameRate(13);
}

function draw(){
	background(0);
	let p=random(9);
	if (p<=4){
		p=5;
	}
	myStars(random(width),random(height),random(3),random(10),p);
	myStars(random(width),random(height),random(3),random(10),p);

	myEarth(400,425,250);

	let x = position + sin(angle) * radius;
	let y = position + cos(angle) * radius/2;
	angle = angle + speed;
	sE= y/3;
	myMoon(x,y,sE);

  }

function myEarth(x,y,size){
	noStroke();
	fill(0,150,200);
	ellipse(x,y,size,size);
}

function myMoon(x,y,size){
	noStroke();
	fill(0);
	ellipse(x-5,y,size,size);
	fill(150);
	ellipse(x,y,size,size);
}

function myStars(x, y, radius1, radius2, npoints) {
  noStroke();
  fill(255,255,random(255),random(255));
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}