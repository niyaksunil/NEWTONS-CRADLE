class Rope {
    constructor(body1,offsetX, offsetY){
        // constructor(body1,body2,offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            // bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness:1,
        //     length:10,
            // isStatic:true
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

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
