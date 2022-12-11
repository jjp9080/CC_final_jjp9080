var x;
var y;
let button;
let b2 = 62;
var p = 0;
let sentence = "Welcome to the Trolley Test. \nHere, we will ask you 3 questions regarding your moral compass.\nAre you ready? \nAre you prepared?\n\n\n          Let's begin.\n\n\n\n\n\n\nclick anywhere to begin.";
let sentence1 = "There is a runaway trolley barreling down the tracks. \nOn the tracks are 5 people unable to move. You are next to a lever.\nIf you pull, the trolley will switch to a different set of tracks. \nHowever, you notice there is another person on the other track.\nWhat do you do?";
let scene1 = true;
let scene2 = false;
let scene3 = false;
let scene4 = false;

function setup() {
  createCanvas(800, 800);
  x = 0;
  y = 0;
//  button = createButton('start');
 // button.position(350, 450);
 // button.mousePressed(firstPage);
}

function draw() {
  background(0);
  if (scene1 == true){
    fill(255);
  strokeWeight(1);
  textSize(60);
  text('The Trolley Problem', 130, 400);
  trolley();
  x = x + 1;
    
    if (x > width/3){
      x = width/3;
    }
  trolley2();
  if (x == width/3){
    y = y+1;
  if (y >width){
    y = 0;
  }
    if (y == width/2){
      x = 0;
      y = 0;
    }
  }
    firstScene();
  }
	if (scene2 == true){
		secondScene();
	}
  if (scene2 == false && scene3 == true){
    thirdScene();
  }
}

function trolley(){
  stroke(255);
  fill(62, 64, 60);
  strokeWeight(6);
  line(x, 230, x, 200);
  line(x+30, 230, x+30, 200);
  line(x+60, 230, x+60, 200);
  line(x+90, 230, x+90, 200);
  rect(x-10, 190, 110, 10);
  rect(x, 180, 90, 10);
  rect(x, 230, 90, 30);
  ellipse(x+20, 265, 20, 20);
  ellipse(x+70,265, 20, 20);
}

function trolley2(){
  stroke(255);
  fill(62, 64, 60);
  strokeWeight(6);
  line(y+width/2, 230, y+width/2, 200);
  line(y+width/2+30, 230, y+width/2+30, 200);
  line(y+width/2+60, 230, y+width/2+60, 200);
  line(y+width/2+90, 230, y+width/2+90, 200);
  rect(y+width/2-10, 190, 110, 10);
  rect(y+width/2, 180, 90, 10);
  rect(y+width/2, 230, 90, 30);
  ellipse(y+width/2+20, 265, 20, 20);
  ellipse(y+width/2+70, 265, 20, 20);
}

function firstScene(){
  strokeWeight(4);
	fill(b2, 64, 60);
  rect(350, 450, 130, 50, 5);
  stroke(0);
  fill(255);
  textSize(30);
  text('start', 380, 485);
	if (mouseX > 350 && mouseX < 480 && mouseY > 450 && mouseY < 500){
		b2 = 180;
	} else{
		b2 = 62;
	}
}
function secondScene(){
	background(0);
	noStroke();
	textSize(20);
	fill(255);
	text(sentence,100, 150);

}
function thirdScene(){
	background(255);
	fill(0, 42, 255);
	noStroke();
	rect(0, 0, 800, 40);
	fill(0);
	noStroke();
	textSize(15);
	if (scene2 == false){
		
	text(sentence1.substring(0, p/3), 70, 70);
	}
  p++;
}

function mousePressed(){
  if (scene1 == true){
    if (mouseX > 350 && mouseX < 480 && mouseY > 450 && mouseY < 500){
      scene2 = true;
    }
		else if (mouseX > 0 && mouseX < 800 && mouseY > 0 && mouseY < 800){
			scene2 = false;
			scene3 = true;
		}
  }
}