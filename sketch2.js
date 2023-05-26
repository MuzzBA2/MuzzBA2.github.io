function setup() {
  createCanvas(400, 300);
}

function draw() {
  
  background(0);

  if (mouseX > 0 && mouseX <= 100) {
      background(800);
    fill(0, 0, 255);
      fill('rgb(0,0,0)')
    textSize(35)
  text('YOU',mouseX,mouseY)
  }
  
  else if (mouseX > 0 && mouseX <= 200) {
      background(0);
    fill(0, 0, 255);
      fill('rgb(255,255,255)')
    textSize(35)
  text('ARE',mouseX,mouseY)
  }
  
  else if (mouseX > 0 && mouseX <= 300) {
    background(800);
    fill(0, 0, 255);
      fill('rgb(0,0,0)')
    textSize(35)
  text('AN',mouseX -20,mouseY)
  }
  
  else if (mouseX > 0 && mouseX) {
    background(0);
    fill(0, 0, 255);
      fill('rgb(255,255,255)')
    textSize(150)
  text('☺︎',mouseX -70,mouseY)
  }
  
}







