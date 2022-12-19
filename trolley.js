//Judith Park 
//Final Project
//The Trolley game: Presented with two impossible choices, but you have to choose one!
//The narrator is meant to make you feel guilty no matter the choice that you make.
//let sentences;
var x;
var y;
let intro;
let firstq;
let backg;
let choicea;
let choiceb;
let choicec;
let choiced;
let christmas;
let secondq;

let b2 = 62;
let b3 = 134;
let b4 = 134;
let c1 = 192;
let c2 = 240;
let c3 = 192;
let c4 = 240;
let d2 = 62;
let d3 = 134;
let d4 = 134;
let e1 = 192;
let e2 = 240;
let e3 = 192;
let e4 = 240;

var p = 0;
var q = 0;
let questions1;
let questions2;
let img1;
let img2;
let img3;
let img4;
var timerValue = 80;
var timerValue1 = 120;
var i=1;
var h = 0;
var l = 0;

let sentence = "Welcome to the Trolley Test. \nHere, we will ask you 3 questions regarding your moral compass. \nAre you ready? \nAre you prepared?\n\n\n\n\n Let's begin.";
let sentence1 = "There is a runaway trolley barreling down the tracks. \nOn the tracks are 5 people unable to move. You are next to a lever.\nIf you pull, the trolley will switch to a different set of tracks. \nHowever, you notice there is another person on the other track.\n\nWhat do you do?";
let achoice1= "Oh so you're going to sit back and do nothing?\nI guess you're right, the more people that die the better…";
let bchoice2 = "Oh… You’re going to kill someone! This isn’t how I thought I was going to start my day…\nI hope that person’s family and friends will forgive you.";

let sentence2 = "It’s the next day. You’re back at the trolley station. \nThere is a dying dog down on one of the tracks. \nNo trolleys will use that line today, so the dog will not be hit. \nYou are in a rush. Do you kill the dog, putting it out of its misery \nor leave it to die, cold and alone?";
let cchoice1 = "Let nature take its course, don’t listen to the yelps.\nI couldn’t leave it there, to die alone.";
let dchoice2 = "How are you going to kill it?\nSomewhere out there is a man missing a best friend.";

let scene1 = true;
let scene2 = false;
let scene3 = false;
let scene4 = false;
let scene5 = false;
let scene6 = false;

function preload() {
  //sentences = loadStrings("text.txt"); --> tried to have them in an array, but it would have been
  // difficult to figure out the spacings of text within the array 
  christmas = loadSound("christmas.mp3");
  intro = loadSound("cut 1.m4a");
  firstq = loadSound("cut 2.m4a");
  secondq = loadSound("cut 7.m4a");
  backg = loadSound("trolley.mp3");
  img1 = loadImage("five.png");
  img2 = loadImage("one.png");
  img3 = loadImage("dog1.png");
  img4 = loadImage("dog2.png");
  choicea = loadSound("cut 3.m4a");
  choiceb = loadSound("cut 4.m4a");
  choicec = loadSound("cut 8.m4a");
  choiced = loadSound("cut 9.m4a");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  setInterval(timeIng, 1000);
  setInterval(timeIng2, 1000);
  //first screen will play christmas music
  christmas.play();
  christmas.amp(0.4);
  questions1 = new question1(0, 0, 10, 10);
  questions2 = new question2(0, 0, 10, 10);
}

function draw() {
  background(0);
  if (scene1 == true) {
    fill(255);
    strokeWeight(1);
    textSize(60);
    textAlign(CENTER);
    text('The Trolley Problem', width/2, height/2);
    trolley();
    //makes the trolleys bump into each other
    x = x + 1;

    if (x > width/2.3) {
      x = width/2.3;
    }
    trolley2();
    if (x == width/2.3) {
      y = y+1;
      if (y >width) {
        y = 0;
      }
      if (y == width/2) {
        x = 0;
        y = 0;
      }
    }
    firstScene();
  }//playing scene by scene
  if (scene2 == true) {
    secondScene();
  } else if (scene2 == false && scene3 == true) {
    questions1.display();
    questions1.ellipsemove();
    choices();
    timer();
  } else if (timerValue == 0 && scene3 == false && scene4 == true) {
    fourthScene();
    backg.stop();
  } else if (scene4 == false && scene5 == true){
    questions2.display();
    questions2.ellipsemove();
    choices2();
    timer2();
  } else if (timerValue1 == 0 && scene5 == false && scene6 == true){
    sixthScene();
    backg.stop();
  }
}
//drawing the trolley function
function trolley() {
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
  ellipse(x+70, 265, 20, 20);
}

function trolley2() {
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
//this scene is the start menu, the first one 
function firstScene() {
  strokeWeight(4);
  fill(b2, 64, 60);
  rectMode(CENTER);
  rect(width/2, height/1.6, 130, 50, 5);
  stroke(0);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text('start', width/2, height/1.57);
  if (mouseX > width/2.3 && mouseX < width/1.8 && mouseY > height/1.8 && mouseY <height/1.3 ) {
    b2 = 180;
  } else {
    b2 = 62;
  }
}
//this is the beginning intro prompt screen
function secondScene() {
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
//what the options are and how they are displayed
function choices() {
  fill(b3, c1, c2);
  strokeWeight(4);
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

function choices2(){
  fill(d3, e1, e2);
  strokeWeight(4);
  stroke(0, 34, 255);
  rect(width/7, height/1.9, 300, 70, 10);
  fill(d4, e3, e4);
  rect(width/1.8, height/1.9, 300, 70, 10);
  noStroke();
  fill(0);
  textSize(40);
  text("C. Leave it", width/6, height/1.85);
  text("D. Kill it", width/1.7, height/1.85);
}

//this is to display the big red timer
//i'm not sure how to start the timer exactly when it gets onto the screen, as it starts when 
//the user starts the game. for now, I made the duration 100 seconds but I would like to find a way to
//start it exactly at 60 at the time that the user arrives at the third scene
function timer() {
  textAlign(LEFT, TOP);
  textSize(70);
  fill(240, 34, 19);
  if (scene1 == false && scene2 == false && scene3 == true && timerValue <= 80 && timerValue >= 10) {
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
//if timer is greater than 0, count down
function timeIng() {
  if (timerValue > 0) {
    timerValue--;
  }
}
function timer2(){
  textAlign(LEFT, TOP);
  textSize(70);
  fill(240, 34, 19);
  if (scene5 == true && timerValue1 <= 120 && timerValue1 >= 10) {
    text("0:" + timerValue1, width/1.3, height/5);
  }
  if (timerValue1 < 10) {
    text('0:0' + timerValue1, width/1.3, height/5);
  }
  if (timerValue1 == 0) {
    b3 = 252;
    c1 = 81;
    c2 = 8;
    b4 = 134;
    scene5 = false;
    scene6 = true;
    backg.stop();
  }
}
function timeIng2() {
  if (timerValue1 > 0) {
    timerValue1--;
  }
}
//this is the end screen, the narrator guilt tripping you based on the choice you made
function fourthScene() {
  background(0);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  if (keyCode == 66) {
    text('Usually we don’t expect testers to kill someone on the first question…\n but we will give you the benefit of the doubt.\n\n People Killed: 1\n\n\n\n\n Press SPACE to continue.', width/2, height/2);
  } if(keyCode == 65){
    text('God, that was a lot of blood… You could’ve stopped that, you know.\n\n People Killed: 5 \n\n\n\n\n Press SPACE to continue.', width/2, height/2);
  }
}

function sixthScene(){
  background(0);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  if (p == 1 && keyCode == 67) {
    text('When you respect something you’re meant to care about its feelings and wishes. Instead, you just left it there to die.\n\n People Killed: 5\nDogs Killed: 1\n\n\n\n\n Press SPACE to continue.', width/2, height/2);
  } if(q == 1 && keyCode == 68){
    text('When you respect something you’re meant to care about its feelings and wishes. Instead, you just killed it.\n\n People Killed: 1\nDogs Killed: 1\n\n\n\n\n Press SPACE to continue.', width/2, height/2);
  }
  if (p == 1 && keyCode == 68){
    text('When you respect something you’re meant to care about its feelings and wishes. Instead, you just killed it.\n\n People Killed: 5\nDogs Killed: 1\n\n\n\n\n Press SPACE to continue.', width/2, height/2);
  }
  if (q == 1 && keyCode == 67){
    text('When you respect something you’re meant to care about its feelings and wishes. Instead, you just left it there to die.\n\n People Killed: 1\nDogs Killed: 1\n\n\n\n\n Press SPACE to continue.', width/2, height/2);
  }
}


//mousepressed functions, for the start menu and the second scene
function mousePressed() {
    if (mouseX > width/2.4 && mouseX < width/1.8 && mouseY > height/2 && mouseY <height/1.4 && scene1 == true ) {
      scene2 = true;
      christmas.stop();
      intro.play();
    } else if (mouseX < width && mouseY < height && i == 1) {
      intro.stop();
      firstq.play();
      backg.play();
      backg.amp(0.4);
      scene2 = false;
      scene3 = true;
      scene1 = false;
      i+=1;
    }
}
//keypressed for the a and b options
function keyPressed() {
  if (scene3 == true) {
    if (keyCode == 65 && h == 0) {
      b3 = 252;
      c1 = 81;
      c2 = 8;
      b4 = 134;
      fill(0);
      choicea.play();
      h = 1;
      p++;
    }
    if (keyCode == 66 && h == 0) {
      b4 = 252;
      c3 = 81;
      c4 = 8;
      b3 = 134;
      choiceb.play();
      fill(0);
      h = 1;
      q++;
    }
  }
  if (scene5 == true){
    if (keyCode == 67) {
      d3 = 252;
      e1 = 81;
      e2 = 8;
      d4 = 134;
      choicec.play();
      fill(0);
    }
    if (keyCode == 68) {
      d4 = 252;
      e3 = 81;
      e4 = 8;
      d3 = 134;
      choiced.play();
      fill(0);
    }
  }
}

function keyReleased(){
  if (scene4 == true && scene3 == false){
    if (keyCode == 32){
      scene3 = false;
      scene5 = true;
      scene4 = false;
      backg.play();
      secondq.play();
    }
  }
}
class question1 {
  constructor(p, t, n, m) {
    this.p = p;
    this.t = t;
    this.n = n;
    this.m = m;
  }
  display() {
    background(255);
    fill(0, 42, 255);
    noStroke();
    rectMode(CORNER);
    rect(0, 0, width, 40);
    fill(0);
    noStroke();
    textSize(18);
    textAlign(LEFT, TOP);
    if (scene2 == false && scene3 == true) {

      text(sentence1.substring(0, this.p/3.8), 100, 80);
      this.p++;
      //this prints dialogue for whichever choice you choose
      if (scene3 == true && keyCode == 66) {
        text(bchoice2.substring(0, this.t/3.8), 100, 250);
        this.t++;
      }
      if (scene3 == true && keyCode == 65) {
        text(achoice1.substring(0, this.t/3.8), 100, 250);
        this.t++;
      }
    }
  }
  ellipsemove() {
    strokeWeight(30);
    stroke(14, 105, 0);
    line(0, height/1.4, width/1.15, height/1.4);
    line(width/1.15, height/1.7, width/1.15, height/1.2);
    noStroke();
    fill(0);
    ellipse(this.n, this.m, 40, 40);
    //this is to move the ellipse across the line
    this.n += 0.4;
    if (this.n < width/1.15) {
      this.m = height/1.4;
    }
    if (this.n > width/1.15) {
      this.n = width/1.15;
    }
    //if you press b, the ellipse will move towards the one person
    if (scene3 == true && keyCode == 66) {
      this.n += 0.4;
      this.m += 0.4;
      //else, the ellipse will move towards the 5 people
    }
    if (scene3 == true && keyCode == 65) {
      this.n += 0.4;
      this.m -= 0.4;
    }
    if (this.m < height/1.7) {
      this.n = width/1.15;
      this.m = height/1.7;
      timerValue = 0;
    }
    if (this.m > height/1.2) {
      this.n = width/1.15;
      this.m = height/1.2;
      timerValue = 0;
    }
    image(img1, width/1.2, height/2.5, 100, 100);
    image(img2, width/1.18, height/1.15, 50, 70);
  }
}
class question2{
  constructor(j, q, s, f) {
    this.j = j;
    this.q = q;
    this.s = s;
    this.f = f;
  }
  display(){
    background(255);
  fill(0, 42, 255);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, 40);
  fill(0);
  noStroke();
  textSize(18);
  textAlign(LEFT, TOP);
    //will print the text slowly
  if (scene3==false && scene4 == false && scene5 == true) {

    text(sentence2.substring(0, this.j/3.8), 100, 80);
    this.j++;
    //this prints dialogue for whichever choice you choose
    if (scene3 == false && scene5 == true && keyCode == 67) {
      text(cchoice1.substring(0, this.q/3.8), 100, 250);
      this.q++;
    }
    if (scene3 == false && scene5 == true && keyCode == 68) {
      text(dchoice2.substring(0, this.q/3.8), 100, 250);
      this.q++;
    }
  }
}
     ellipsemove() {
  strokeWeight(30);
  stroke(14, 105, 0);
       //this is to print the graphic representation at the bottom
  line(0, height/1.4, width/1.15, height/1.4);
  line(width/1.15, height/1.7, width/1.15, height/1.2);
  noStroke();
  fill(0);
  ellipse(this.s, this.f, 40, 40);
  //this is to move the ellipse across the line
  this.s += 0.4;
  if (this.s < width/1.15) {
    this.f = height/1.4;
  }
  if (this.s > width/1.15) {
    this.s = width/1.15;
  }
  //if you press b, the ellipse will move towards the one person
  if (scene5 == true && keyCode == 68) {
    this.s += 0.4;
    this.f += 0.4;
    //else, the ellipse will move towards the 5 people
  }
  if (scene5 == true && keyCode == 67) {
    this.s += 0.4;
    this.f -= 0.4;
  }
  if (this.f < height/1.7) {
    this.s = width/1.15;
    this.f = height/1.7;
    timerValue1 = 0;
  }
  if (this.f > height/1.2) {
    this.s = width/1.15;
    this.f = height/1.2;
    timerValue1 = 0;
  }
    image(img3, width/1.2, height/2.5, 100, 100);
    image(img4, width/1.18, height/1.15, 50, 70);
}
  
}
 