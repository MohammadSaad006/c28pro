class constraint {
    constructor(bodyX,pointB){
        var option ={
            bodyA:bodyX,
            pointB :pointB,
            stiffness:0.2,
            lenght:30
            
        }
        this.chain =Constraint.create (option)
        this.pointB=pointB
        World.add(world,this.chain)
    }
    fly(){
       this.chain.bodyA=null 
    }
    attacher(bodyA){
        this.chain.bodyA=bodyA;
    }
    display() {
        if (this.chain.bodyA){
     var pointA= this.chain.bodyA.position
     var pointB=this.pointB
     strokeWeight(2);
     line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
    }    
}
