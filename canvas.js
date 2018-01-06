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



function animate() {
	requestAnimationFrame(animate);

	ctx.clearRect(0,0,innerWidth,innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

}

animate();

console.log(canvas);