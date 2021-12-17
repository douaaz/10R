let size = 8
let img;
let startX=0
let startY=0
function preload(){
  img = loadImage('assets/thescream.jpg')
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  img.updatePixels();
  
}
function draw(){
  clear();
  background(0);
  frameRate(24);
  
  let size = floor(map(mouseX, 0, width, 7, 40));
  
  for(var startY = 0; startY < img.height; startY++) {
    for(var startX = 0; startX <img.width; startX++) {
      var index= (startX + startY * img.width)*4;
      var r = img.pixels[index+0];
      var g = img.pixels[index+1];
      var b = img.pixels[index+2];
      
      var bright = ((0.3 * r) + (0.56 * g) + (0.12 * b))
      
      noStroke();
      fill(r,g,b);
      rect(startX, startY, size, size)
      
      startX = startX + size - 1 
      
    }
    startY= startY + size -1
  }
  
}

