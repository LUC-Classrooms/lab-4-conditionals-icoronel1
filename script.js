var x, y, size

function setup() {
  createCanvas(320, 240);
}
function draw() {
  background(200);
  
  // check to condition of the mouse
 if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
   fill("blue");
   x = width/4
   size = 150
  }
  else { 
    // otherwise do this:
   fill("yellow");
   x = width/2
   y = height/2
   size = 100
  }
  ellipse(x, y, size, size);
  
}
