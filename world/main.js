var xpos=100;
var ypos=100;
var diameter=30;
var xspeed =5;
var yspeed =7;
function setup(){
    createCanvas(1000,500);
    background(0);
}
function draw(){
    fill(0,255,0);
    ellipse(xpos,ypos,diameter,diameter);
    xpos +=xspeed;
    ypos+=yspeed;
    if(xpos >=width || xpos <=0){
        xspeed *= -1;
    }
    if(ypos >=height || ypos<=0){
        yspeed *=-1;
    }
}