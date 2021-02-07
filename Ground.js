class Ground {
    constructor() {
    var options = {isStatic: true}

    this.ground = Bodies.rectangle(440,450,1400,40,options)
    World.add(world, this.ground)

}
    display() {
    fill("brown");
    noStroke();
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,900,20);

    }


}