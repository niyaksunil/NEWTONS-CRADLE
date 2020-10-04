// created the Rope class
class Rope {
    constructor(body1,offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness:1,
        }

// created the constraint rope
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

// displaying the function
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        push();
        strokeWeight(4);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }

}
