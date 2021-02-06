class Boy{
    constructor(x,y,diameter){
         var options  = {
          isStatic : true
         }
         this.body = Bodies.circle(x,y,diameter,options)
         this.diameter = diameter;
         this.image = loadImage("Walking Frame/walking_1.png");

         World.add(world , this.body);
        }

        display(){
            var pos = this.body.position;
            imageMode(CENTER);
            image(this.image,pos.x,pos.y+70,300,300);
        }
    }