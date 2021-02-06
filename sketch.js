const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thunderCreatedFrame;
var thunder,thunder1;
 var thunder2;
 var thunder3;
 var maxDrops = 100;
 var drop = [];


function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    
    boy = new Boy(200,500,50);

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drop.push(new drops(random(0,400), random(0,400)));
        }
    }
    
}

function draw(){
    background(0);
    Engine.update(engine);
    

    for(var i=0;i<maxDrops;i++){
        drop[i].displayDrops();
        drop[i].updateDrops();
    }
    
    boy.display();
   

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }

    if(thunderCreatedFrame+20 === frameCount && thunder){
        thunder.destroy();
    }

    drawSprites();
}   



