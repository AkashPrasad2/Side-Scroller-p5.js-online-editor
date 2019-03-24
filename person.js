function Person() {
  this.pos = createVector(50, 250);
  this.vel = createVector(3, 0);
  this.acc = createVector(0, 0);
  this.mass = 10;
  this.jumpCount =0;
  this.lifeCount=3;
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.display = function() {
    fill(239, 130, 71);
    stroke(255);
    rect(this.pos.x, this.pos.y+59, this.mass*5, this.mass*5);
    fill(0,0,0);
    ellipse(this.pos.x+13,this.pos.y+80,15,15);
    ellipse(this.pos.x+35,this.pos.y+80,15,15);
    //displayjumpCount
    fill(71, 7, 234)
    text("jump count:"+this.jumpCount, 350+this.pos.x,50);
    text("♥♥♥ "+this.lifeCount, 100+this.pos.x,50);
 
  }
  this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= 0;
      this.pos.y = 250;
    }
  }
} 
