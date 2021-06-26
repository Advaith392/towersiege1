class Polygon{

    constructor(){
        var polygon_options={
          restitution: 0.8,
          friction: 0.7,
          density: 0.8

          }
        
          this.polygon = Bodies.rectangle(450,390,900,20,polygon_options)
          this.polygonImg = loadImage("polygon.png")
          World.add(world,this.polygon);
    }
    display(){
        noStroke();
        fill(188,67,67);
        imageMode(CENTER);
        image(this.polygonImg, this.polygon.position.x,this.polygon.position.y,900,20);

    }
}