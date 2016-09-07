
var xpos=0;
var speed=2;


function setup() {
 createCanvas(400, 200);
}

function draw() {
 
 background(255);
 
 fill(255,0,0);
 
 ellipseMode(CENTER);
 
 xpos=xpos+speed;
 
 if ((xpos > width) || (xpos < 2))
{ speed= speed * -1 ;}

ellipse (xpos, 100, 40, 40);


 fill(0);
  
text("xpos = " + xpos, 25, 25);
  
}