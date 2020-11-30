class Mango{
    constructor(x,y,radius)
    {
        var options=
        {
            isStatic:true,
         
            friction:1
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.image=loadImage("Sprites/mango.png")
        this.radius=radius;
        World.add(world,this.body)

        
        
    }

    display()
    {
        var mangopos=this.body.position

        imageMode(CENTER);
        image(this.image,mangopos.x,mangopos.y,50,50);
    }
}
