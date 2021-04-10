class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        stroke("black");
        strokeWeight(2);
        rect(0,0,this.width,this.height);
        pop();
      }
}


