

var person;

var sceneNum=0


function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,-15);
    person.applyForce(jump);
  } else if (key=='q'){
    sceneNum++;
  }
  
}

function draw() {
  
  if (sceneNum===0) {
    background(37,209,160);
  textSize(30);
	fill(0,0,0);
	text("The adventures of Mr.Cube",150,100)
    textSize(20);
	fill(0,0,100);
    text("How to play:", 350, 200)
    text("Avoid obstacles")
    text("Press 'space bar' to jump",350, 230)
    	text("Press 'Q' to begin",350,260)
    
    
  }
  else if (sceneNum==1){
    background(200,200,200)
    
    
  background(51);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.5);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
    person.display();
  fill(0,0,100);
  rect(400, height-50,30,50);
    rect(700, height-50,30,50);
    rect(900,height-70, 30, 900);
  }else{
      background(20,20,20);
      fill(100,200,100);
      text("Game over",100,100)
    }
}
