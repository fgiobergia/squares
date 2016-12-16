class Obstacle {
	constructor (height, width, floorHeight) {
		this.height = height;
		this.width = width;
		this.floorHeight = floorHeight;

		this.w = 20;
		this.h = 20;

		this.x = this.width - this.w;
		this.y = 0//this.height - this.floorHeight;

		this.xspeed = -4;

	}

	show () {
		noStroke();
		fill(204);

		var yRect = this.height - this.floorHeight - this.h - this.y;

		rect (this.x, yRect, this.w, this.h);
	}

	update () {
		this.x = this.x + this.xspeed;
	}

	outOfScreen () {
		return (this.x + this.w < 0);
	}

	getX () {
		return this.x;
	}

	getY () {
		return this.y;
	}

	getW () {
		return this.w;
	}

	getH () {
		return this.h;
	}
}