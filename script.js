function setup() {
  createCanvas(320, 240);
}
function draw() {
  background(200);
var x = width/2
var y = height/2
var size = 100
  
  // check to condition of the mouse
 if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
   fill("blue");
  }
  else { 
    // otherwise do this:
   fill("yellow");
  }
  ellipse(x, y, size, size);
  
}
