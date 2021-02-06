class drops{
    constructor(x,y){
         var options  = {
            friction: 0.001,
            restitution:0.1   
          
         }
         this.body = Bodies.circle(x,y,5,options)
         this.diameter = 5;

         World.add(world , this.body);
        }

        displayDrops(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            fill("blue");
            //imageMode(CENTER);
           // image(this.image,pos.x,pos.y,60,60);
            ellipse(0,0,this.diameter);
            pop();
           
        }

        updateDrops(){     
            if(this.body.position.y > height){
    
                Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
            }
        }
    }