
var person;

var sceneNum=0


function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    person.jumpCount++
    var jump = createVector(0,-15);
    person.applyForce(jump);
  } else if (key=='q'){
    sceneNum++;
  }
  
}

function draw() {
  
  if (sceneNum===0) {
    background(63, 226, 27);
  textSize(40);
	fill(250,0,0);
	text("The Adventures of Mr.Cube",50,100)
    textSize(20);
	fill(0,0,100);
    text("How to play:", 300, 200)
    text("Avoid obstacles",300,230)
    text("Press 'space bar' to jump",300, 260)
    	text("Press 'Q' to begin",300,290)
    
    
  }
  else if (sceneNum==1){
    background(200,200,200)
    
    
  background(64, 219, 249);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.5);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
  
    person.update();
  person.edges();
    person.display();
  fill(0,0,100);
  rect(400, height-50,30,50);
    rect(700, height-50,30,50);
    rect(900,height-70, 30, 90);
    rect(1150,height-20,60, 50);
    rect(1300,height+50,70,50);
    rect(1600, height-50, 30, 50);
    rect(1750,height-50, 40, 60);
    rect(1950,height-80,40,90);
    ellipse(2200,height-30,30,50);
    rect(2400,height-120,50,120);
  }else{
      background(66, 226, 244);
    textSize(50);
      fill(00,00,00);
      text("Mission Complete!!",100,100)
    textSize(25)
    text("☺Thanks for playing☺",150,200)
    }
}
