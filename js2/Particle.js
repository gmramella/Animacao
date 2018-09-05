function Particle(id, trajectory, position, velocity, acceleration, size, shape, color, alpha, duration) {
	this.position = position;
	this.velocity = velocity;
	this.acceleration = acceleration;
	this.size = size;
	this.shape = shape;
	this.color = color;
	this.alpha = alpha;
	this.duration = duration;
	
	var initialVelocity = velocity;
	var initialPosition = position;
	
	var acceleration = new Vec2(acceleration);
	var velocity = new Vec2(initialVelocity);
	var position = new Vec2(initialPosition);
	
	var starttime = new Date().getTime();
	
	switch (trajectory) {
		case "bezier":
			switch (shape) {
				case "circle":
					var shift = 45 * (Number(id.substring("circle".length)) % 8) * Math.PI / 180;
					var t = 0;
					var points = [];
					points.push({x: position.x, y: position.y});
					points.push({x: position.x + 100 * (Math.cos(shift) + Math.sin(shift)), y: position.y - 100 * (Math.sin(shift) - Math.cos(shift))});
					points.push({x: position.x + 200 * Math.cos(shift), y: position.y - 200 * Math.sin(shift)});
					createCircle(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							t += dt;
							alpha -= duration / 1000000;
							updateCircle(id, quadratic(points, 1000 * t / duration), size, color, alpha);
						}
					}, 1000 * dt);
					break;
				case "hex":
					var shift = 45 * (Number(id.substring("hex".length)) % 8) * Math.PI / 180;
					var t = 0;
					var points = [];
					points.push({x: position.x, y: position.y});
					points.push({x: position.x + 100 * (Math.cos(shift) + Math.sin(shift)), y: position.y - 100 * (Math.sin(shift) - Math.cos(shift))});
					points.push({x: position.x + 200 * Math.cos(shift), y: position.y - 200 * Math.sin(shift)});
					createHex(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							t += dt;
							alpha -= duration / 1000000;
							updateHex(id, quadratic(points, 1000 * t / duration), size, color, alpha);
						}
					}, 1000 * dt);
					break;
				case "rect":
					var shift = 45 * (Number(id.substring("rect".length)) % 8) * Math.PI / 180;
					var t = 0;
					var points = [];
					points.push({x: position.x, y: position.y});
					points.push({x: position.x + 100 * (Math.cos(shift) + Math.sin(shift)), y: position.y - 100 * (Math.sin(shift) - Math.cos(shift))});
					points.push({x: position.x + 200 * Math.cos(shift), y: position.y - 200 * Math.sin(shift)});
					createRect(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							t += dt;
							alpha -= duration / 1000000;
							updateRect(id, quadratic(points, 1000 * t / duration), size, color, alpha);
						}
					}, 1000 * dt);
					break;
			}
			break;
		case "linear":
			switch (shape) {
				case "circle":
					createCircle(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							var prevVelocity = new Vec2(velocity);
							velocity.add(acceleration.scale(dt));
							var nextVelocity = new Vec2(velocity);
							
							var avg = new Vec2(prevVelocity);
							avg.average(nextVelocity);
							position.add(avg.scale(dt));
							alpha -= duration / 1000000;
							updateCircle(id, position, size, color, alpha);
						}
					}, 1000 * dt);
					break;
				case "hex":
					createHex(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							var prevVelocity = new Vec2(velocity);
							velocity.add(acceleration.scale(dt));
							var nextVelocity = new Vec2(velocity);
							
							var avg = new Vec2(prevVelocity);
							avg.average(nextVelocity);
							position.add(avg.scale(dt));
							alpha -= duration / 1000000;
							updateHex(id, position, size, color, alpha);
						}
					}, 1000 * dt);
					break;
				case "rect":
					createRect(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							var prevVelocity = new Vec2(velocity);
							velocity.add(acceleration.scale(dt));
							var nextVelocity = new Vec2(velocity);
							
							var avg = new Vec2(prevVelocity);
							avg.average(nextVelocity);
							position.add(avg.scale(dt));
							alpha -= duration / 1000000;
							updateRect(id, position, size, color, alpha);
						}
					}, 1000 * dt);
					break;
			}
			break;
		case "spiral":
			switch (shape) {
				case "circle":
					var shift = 45 * (Number(id.substring("circle".length)) % 8);
					var t = 0;
					var radius = 10;
					var period = duration / 1000 / 2;
					var center = new Vec2(position);
					position = {x: center.x + radius * Math.cos((shift + t) * Math.PI / 180), y: center.y + radius * Math.sin((shift + t) * Math.PI / 180)};
					createCircle(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							t+=2 * Math.PI / period;
							radius += 0.1;
							position = {x: center.x + radius * Math.cos((shift + t) * Math.PI / 180), y: center.y + radius * Math.sin((shift + t) * Math.PI / 180)};
							alpha -= duration / 1000000;
							updateCircle(id, position, size, color, alpha);
						}
					}, 1000 * dt);
					break;
				case "hex":
					var shift = 45 * (Number(id.substring("hex".length)) % 8);
					var t = 0;
					var radius = 10;
					var period = duration / 1000 / 2;
					var center = new Vec2(position);
					position = {x: center.x + radius * Math.cos((shift + t) * Math.PI / 180), y: center.y + radius * Math.sin((shift + t) * Math.PI / 180)};
					createHex(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							t+=2 * Math.PI / period;
							radius += 0.1;
							position = {x: center.x + radius * Math.cos((shift + t) * Math.PI / 180), y: center.y + radius * Math.sin((shift + t) * Math.PI / 180)};
							alpha -= duration / 1000000;
							updateHex(id, position, size, color, alpha);
						}
					}, 1000 * dt);
					break;
				case "rect":
					var shift = 45 * (Number(id.substring("rect".length)) % 8);
					var t = 0;
					var radius = 10;
					var period = duration / 1000 / 2;
					var center = new Vec2(position);
					position = {x: center.x + radius * Math.cos((shift + t) * Math.PI / 180), y: center.y + radius * Math.sin((shift + t) * Math.PI / 180)};
					createRect(id, position, size, color, alpha);
					var interval = setInterval(function(){
						if (new Date().getTime() - starttime > duration || alpha <= 0 || outside(position)) {
							deleteShape(id);
							clearInterval(interval);
						} else {
							t+=2 * Math.PI / period;
							radius += 0.1;
							position = {x: center.x + radius * Math.cos((shift + t) * Math.PI / 180), y: center.y + radius * Math.sin((shift + t) * Math.PI / 180)};
							alpha -= duration / 1000000;
							updateRect(id, position, size, color, alpha);
						}
					}, 1000 * dt);
					break;
			}
			break;
	}
	
	//Accessed by ParticleSystem
	this.die = function() {
		deleteShape(id);
		clearInterval(interval);
	}
}