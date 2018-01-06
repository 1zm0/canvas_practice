var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function draw() {
	if (canvas.getContext) {
    

// Diamond: From top moving clockwise
ctx.beginPath();
ctx.moveTo(150,75);
ctx.lineTo(225, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225,150);
ctx.lineTo(150, 225);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150,225);
ctx.lineTo(75,150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75,150);
ctx.lineTo(150, 75);
ctx.stroke();

//Square: from top left moving clockwise

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,100);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(100, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100, 200);
ctx.stroke();



//Draw circle
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2, true);
ctx.moveTo(150, 75);
ctx.stroke();

 }
}


//create 7 randomly placed alternating color circles on canvas

/*for (var i = 0; i < 7; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	var colors = ['#ff0000', '#00ff00', '#0000ff'];
	var random_color = colors[Math.floor(Math.random() * colors.length)];
	ctx.beginPath();
	ctx.arc(x, y, 50, 0, Math.PI * 2, false);
	ctx.strokeStyle = random_color;
	ctx.stroke();
} */


function Circle(x, y, dx, dy, radius) {
	this.x =x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = 'black';
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    	ctx.fill();
		ctx.stroke();
	}
	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
		    this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
		    this.dy = -this.dy;
		}
	 	this.x += this.dx;
	 	this.y += this.dy;

	 	this.draw();
	}
}

var circle = new Circle(window.innerWidth / 2, window.innerHeight / 2,3,3,30);




var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 18;
var dy = (Math.random() - 0.5) * 18;
var radius = 30;

function animate() {
	requestAnimationFrame(animate);

	ctx.clearRect(0,0,innerWidth,innerHeight);
	circle.draw();
	draw();
	//Draw circle
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
	ctx.stroke();

	if (x + radius > innerWidth || x - radius < 0) {
		dx = -dx;
	}

	if (y + radius > innerHeight || y - radius < 0) {
		dy = -dy;
	}
	x += dx;
	y += dy;
}

animate();

console.log(canvas);