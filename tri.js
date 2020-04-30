class Tri{
constructor(){
    var options = {
        'restitution':0.8,
          'friction':1.0,
          'density':1.0
    }
    this.body=Bodies.polygon(200,200,3,50)
    this.sides=3;
    this.radius=50;

   World.add(world,this.body)
}

display(){
    var pos=this.body.position
    var sides=this.body.sides
    var radius=this.body.radius
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    stroke("brown");
    polygon(0, 0, this.sides,this.radius);
    pop();
  }
};








