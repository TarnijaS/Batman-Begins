class drop
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.1,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var droppos=this.body.position;
			push();
			translate(droppos.x, droppos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("blue")
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)

			//ellipse(this.x,this.y,this.r,this.r);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
