var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var circleArray = [];

for (var i = 0; i < 100; i ++) {
	var radius = 30;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius *2) + radius;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	circleArray.push(new Circle(x,y,dx,dy,radius));

	var circle = new Circle(window.innerWidth / 2, window.innerHeight / 2, 3, 3, 30);
}

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
	'#ffaa33',
	'#99ffaa',
	'#00ff00',
	'#4411aa',
	'#ff1100',
];
console.log(colorArray);

window.addEventListener('mousemove',
	function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
		console.log(mouse);
	})

function Circle(x, y, dx, dy, radius) {
	this.x =x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
		ctx.strokeStyle = 'purple';
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

	 	//interactivity
	 	if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y -this.y > -50) {
	 		if (this.radius < maxRadius) {
	 		this.radius += 1;
	 		}
	 	} else if (this.radius > minRadius){
	 		this.radius -= 1;
	 	}

	 	this.draw();
	}
}



function animate() {
	requestAnimationFrame(animate);

	ctx.clearRect(0,0,innerWidth,innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

}

animate();

console.log(canvas);