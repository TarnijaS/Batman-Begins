const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var Umbrella
var maxDrops = 100

function preload(){
    
}

function setup(){
   createCanvas(300,500)

   Umbrella = new umbrella(50,50,100,450);
    
}

function draw(){
    background("pink");

    for(var i = 0; i < maxDrops; i++){
        drops.push(new createdrop(random(0,400), random (0,400)));
    }
    
}   

