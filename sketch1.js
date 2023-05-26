function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //draw head
  fill('PapayaWhip');
  ellipse(200,200,250,300)
  
  //draw left eye
  fill('GhostWhite')
  ellipse(150,200,90,120)
  
  fill('DarkCyan')
  ellipse(160,200,35,90)
  
  fill('LightSeaGreen');
  ellipse(160,200,20,50)
  
  //draw right eye
  fill('GhostWhite')
  ellipse(250,200,90,120)
  
  fill('DarkCyan')
  ellipse(245,200,35,90)

  fill('LightSeaGreen');
  ellipse(245,200,20,50)
  

  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
}