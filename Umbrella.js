class umbrella
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		
		this.body= Bodies.circle(this.x, this.y, (this.r)/2, options)
        World.add(world, this.body);
        this.image = loadImage("boyAndUmbrella.jpg");

	}
	display()
	{
			
			var umbrellapos=this.body.position;
			push();
			translate(umbrellapos.x, umbrellapos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//fill("blue")
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)

			ellipse(this.x,this.y,this.r,this.r);
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
