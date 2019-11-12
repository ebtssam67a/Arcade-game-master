
class Enemy {
		constructor(x , y) {
		this.x = x;
		this.y = y;
		this.sprite = 'images/enemy-bug.png';
		this.speed = Math.random()*3+200;
		}
	update(dt) {
		this.x = this.x+(this.speed*dt);
		if(this.x > 550){
			this.x = -100;
		}
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

class Player{
	constructor(x , y) {
		this.x = x;
		this.y = y ;
		this.sprite = 'images/girl.png';
	}
	update(dt) {
		
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	handleInput(direction){
		switch (direction){
			case 'up':
				if (this.y > -40){this.y -=83}
				if(this.y < 0){
					score++;
					scoreElement.innerText = score;
					player.x = 203;
					player.y = 375;
				}
				break;
			case 'down':
				if (this.y< 375){this.y +=83}
				break;
			case 'left':
				if (this.x> 1){this.x -=101}
				break;
			case 'right':
				if (this.x< 405){this.x +=101}
				break;
			default:
			break;
		}
	}
}

class Daimond {
		constructor(x , y) {
		this.x = x;
		this.y = y;
		this.sprite ='images/Heart.png';
		this.speed = Math.random()*2+400;
		}
	update(dt) {
		this.x = this.x+(this.speed*dt);
		if(this.x > 900){
			this.x = -100;
		}
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}
let daimond1 = new Daimond(0,60);
let daimond2 = new Daimond(400,222);
let alldaimond = [daimond1,daimond2];

// Now instantiate your objects.
let enemy1 = new Enemy(50,58);
let enemy2 = new Enemy(200,141);
let enemy3 = new Enemy(500,222);
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1,enemy2,enemy3];
// Place the player object in a variable called player
let player = new Player(203,375);
let scoreElement = document.getElementById("score");
let pointElement = document.getElementById("point");
let score =0 ;
let points=0;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function checkCollisions(){
	allEnemies.forEach(enemy => {
		let distance = getDistance(player, enemy);
		if (distance<65){ 
			if (score > 0){ score--; }
			scoreElement.innerText = score;
			player.x = 203;
			player.y = 375;
		}
	})
	
	alldaimond.forEach(daimond => {
		let distance = getDistance(player, daimond);
		if (distance<65){ 
			 points+=10;
			pointElement.innerText = points;
			
		}
	})
}

function getDistance(objOne, objTow) {
	let a = objOne.x - objTow.x;
	let b = objOne.y - objTow.y;
	
	return Math.sqrt(a*a +  b*b);
	
}




