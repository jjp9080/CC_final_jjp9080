var x;
var y;
let intro;
let firstq;
let backg;
let b2 = 62;
let b3 = 134;
let b4 = 134;
let c1 = 192;
let c2 = 240;
let c3 = 192;
let c4 = 240;
var p = 0;
var t= 0;
var timerValue = 60;
let sentence = "Welcome to the Trolley Test. \nHere, we will ask you 3 questions regarding your moral compass. \nAre you ready? \nAre you prepared?\n\n\n\n\n Let's begin.";
let sentence1 = "There is a runaway trolley barreling down the tracks. \nOn the tracks are 5 people unable to move. You are next to a lever.\nIf you pull, the trolley will switch to a different set of tracks. \nHowever, you notice there is another person on the other track.\n\n\nWhat do you do?";
let achoice1= "Oh so you're going to sit back and do nothing?\nI guess you're right, the more people that die the better…";
let scene1 = true;
let scene2 = false;
let scene3 = false;
let scene4 = false;

function preload(){
  intro = loadSound("cut 1.m4a");
    firstq = loadSound("cut 2.m4a");
  backg = loadSound("trolley.mp3");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  setInterval(timeIng, 1000);
}

function draw() {
  background(0);
  if (scene1 == true){
    fill(255);
  strokeWeight(1);
  textSize(60);
  textAlign(CENTER);
  text('The Trolley Problem', width/2, height/2);
  trolley();
  x = x + 1;
    
    if (x > width/2.3){
      x = width/2.3;
    }
  trolley2();
  if (x == width/2.3){
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
  else if (scene2 == false && scene3 == true){
    thirdScene();
    choices();
    timer();
  }
  else if (timerValue == 0 && scene3 == false && scene4 == true){
    fourthScene();
    backg.stop();
  }
}

function trolley(){
  stroke(255);
  fill(62, 64, 60);
  strokeWeight(6);
  rectMode(CORNER);
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
  rectMode(CORNER);
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
  rectMode(CENTER);
  rect(width/2, height/1.6, 130, 50, 5);
  stroke(0);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text('start', width/2, height/1.57);
  if (mouseX > width/2.3 && mouseX < width/1.8 && mouseY > height/1.8 && mouseY <height/1.3 ){
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
  textAlign(LEFT, TOP);
  text(sentence, 100, 100);
  textSize(25);
  textAlign(CENTER);
  text('Click anywhere to begin.', width/2, height/2);
}

function choices(){
  fill(b3, c1, c2);
  stroke(0, 34, 255);
  rect(width/7, height/1.9, 300, 70, 10);
  fill(b4, c3, c4);
  rect(width/1.8, height/1.9, 300, 70, 10);
  noStroke();
  fill(0);
  textSize(40);
  text("A. Do nothing", width/6, height/1.85);
  text("B. Pull lever", width/1.7, height/1.85);
}

function thirdScene(){
  background(255);
  fill(0, 42, 255);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, 40);
  fill(0);
  noStroke();
  textSize(18);
  textAlign(LEFT, TOP);
  if (scene2 == false){
    
  text(sentence1.substring(0, p/3.8), 100, 80);
  p++;
    if (timerValue <= 20){
      text(achoice1.substring(0, t/3.8), 100, 250);
      t++;
    }
  }
}
function timer(){
  textAlign(LEFT, TOP);
  textSize(70);
  fill(240, 34, 19);
  if (scene2 == true){
    timerValue = 0;
  }
  if (scene3 == true && timerValue <= 60 && timerValue >= 10) {
    text("0:" + timerValue, width/1.3, height/5);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width/1.3, height/5);
  }
  if (timerValue == 0) {
      b3 = 252;
      c1 = 81;
      c2 = 8;
      b4 = 134;
      scene3 = false;
      scene4 = true;
      backg.stop();
  }
}

function timeIng() {
  if (timerValue > 0) {
    timerValue--;
  }
}
function fourthScene(){
  background(0);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  if (keyCode == 66){
    text('Usually we don’t expect testers to kill someone on the first question…\n but we will give you the benefit of the doubt.', width/2, height/2);
  }
  else {
    text('God, that was a lot of blood… You could’ve stopped that, you know.', 400, 400);
  }
}
function mousePressed(){
  if (scene1 == true){
    backg.play();
    if (mouseX > width/2.4 && mouseX < width/1.8 && mouseY > height/2 && mouseY <height/1.4 ){
      scene2 = true;
      backg.stop();
      intro.play();
    }
    else if (mouseX < width && mouseY < height){
      intro.stop();
      firstq.play();
      backg.play();
      backg.amp(0.35);
      scene2 = false;
      scene3 = true;
    }
  }
}
function keyPressed(){
  if (scene3 == true){
    if (keyCode == 65){
      b3 = 252;
      c1 = 81;
      c2 = 8;
      b4 = 134;
    }
    if (keyCode == 66){
      b4 = 252;
      c3 = 81;
      c4 = 8;
      b3 = 134;
    }
  }
}