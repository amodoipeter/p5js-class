function setup(){
    createCanvas(800,800);
    
}
function draw(){ 
    background(0);
    var xpos =15;
    var ypos =15;
    var diameter =30;
    noStroke();
    fill(random(255),random(255), random(255));
    ellipse(xpos,ypos,diameter,diameter);


    for(xpos; xpos < width; xpos += 50){
        for(ypos =15; ypos < height; ypos+= 50){
        ellipse(xpos,ypos,diameter,diameter);
     }
    }
}