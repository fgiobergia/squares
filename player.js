"use strict";

class Player {
	constructor (height, floorHeight) {
		this.floorHeight = floorHeight;
		this.height = height;

		this.y = 0; // 0 relative to floorHeight
		this.x = 40;

		this.yspeed = 0;
		this.yacc = -0.3;

		this.color = color(255,0,0);

		this.side = 20;

		this.jumpState = 0;
	}

	show () {
		noStroke();

		fill(this.color);

		var yRect = this.height - this.floorHeight - this.side - this.y;
		var xRect = this.x;

		rect(xRect, yRect, this.side, this.side);
	}

	update () {
		this.yspeed = this.yspeed + this.yacc;
		this.y = max (0, this.y + this.yspeed);

		if (this.y == 0) {
			//this.yspeed = 0; // normal force or something
			this.yspeed *= -.4;
		}

		if (this.y < 10) {
			this.jumpState = 0;
		}
	}

	isJumping () {
		return (this.y > 15);
	}

	jump () {
		if (this.jumpState == 1) {
			this.yspeed += 2;
			this.jumpState = 2;
		}
		else if (this.jumpState == 0) {
			this.yspeed = 6;
			this.jumpState = 1;
		}
	}

	collided (obstacle) {
		if (this.y <= obstacle.getY() + obstacle.getH() &&
		   ((this.x >= obstacle.getX() && this.x <= obstacle.getX() + obstacle.getW()) || 
		   (obstacle.getX() >= this.x && obstacle.getX() <= this.x + this.side))) {
			return true;
		}
		return false;
	}  
}