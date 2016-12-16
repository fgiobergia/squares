var width = 700;
var height = 300;
var floorHeight = 50;

var player;

var lastSpawn;
var obstacles = [];

var distances = [
				40,40,40,40,
				50,50,
				60,60,60,
				70
				];

var score;

function setup() {
    createCanvas(700, 300);
    player = new Player(height, floorHeight);
	score = 0;
    spawn();
}

function spawn () { 
	var o = new Obstacle(height, width, floorHeight);
	obstacles.push(o);
	nextSpawn = random(distances);

}

function draw() {
	background(51);
	fill (204);
	noStroke();
	rect(0, height - floorHeight, width, height - floorHeight);

	player.update();
	player.show();

	if (nextSpawn <= 0) {
		spawn();
	}

	for (var i = 0; i < obstacles.length; i++) {
		obstacles[i].update();
		obstacles[i].show();

		if (obstacles[i].outOfScreen()) {
			obstacles.splice(i, 1);	
		}
		else {
			if (player.collided(obstacles[i])) {
				console.log('COLLISION!');
				noLoop();
			}
		}


	}

	nextSpawn --;
	score ++;

	textSize(23);
	text(Math.floor(score / 10), 32, 32);

}

function keyPressed() {
	if (keyCode == 0x20) { // 0x20: space
		if (!player.isJumping()) {
			player.jump ();
		}
	}
}