// creating the Bob class
class Bob {
    constructor(x,y,radius){
      var options = {
        'restitution':1.12,
        'friction':0.01,
        'density':0.05,
        isStatic : false
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      // console.log(this.body);
    } 
    
    // displaying the function
     display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(2);
      stroke("white");
      fill(232,0,83);
      ellipse(0, 0);
      pop();
     }
  }
  