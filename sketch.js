var width = 700;
var height = 300;
var floorHeight = 50;

var player;

var unit = 20;
var lastSpawn;
var obstacles = [];

var distances = [
				40,40,40,40,
				50,50,
				60,60,60,
				70
				];

function setup() {
    createCanvas(700, 300);
    player = new Player(height, floorHeight);
    spawn();
}

function spawn () { 
	var o = new Obstacle(height, width, floorHeight);
	obstacles.push(o);
	nextSpawn = random(distances);
	/*
	var j = Math.floor(Math.random() * distances.length * 3);
	console.log(j);
	if (j < distances.length) {
		nextSpawn = distances[j];
	}
	else {
		nextSpawn = j;
	}*/
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
			console.log('Bye!')
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

}

function keyPressed() {
	if (keyCode == 0x20) { // 0x20: space
		if (!player.isJumping()) {
			player.jump ();
		}
	}
}