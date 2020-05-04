class Car{
    constructor(){
        this.weight=random(400,1500);
        this.speed=random(6,10);;
        this.velocityX=this.speed;
        this.width=20;
        this.heigth=20;
        this.x=random(50,200);
        this.y = 380;
       
        
    }

display() {
    ellipse(this.x, this.y, this.width, this.height);
    fill("white");
}
move() {
    this.x = this.x +5;
}     

}