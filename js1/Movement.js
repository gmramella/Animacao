function constantLinearCircle(begin, end) {
	var circle = addCircle(begin.x, begin.y, 4);
	addCircle(begin.x, begin.y, 4, "red");
	addCircle(end.x, end.y, 4, "green");
	
	var accelerationDir = {x: end.x - begin.x, y: end.y - begin.y};
	var dist = length(accelerationDir);
	accelerationDir = normalize(accelerationDir);
	var accelerationSpeed = 0;
	var acceleration = {x: accelerationDir.x * accelerationSpeed, y: accelerationDir.y * accelerationSpeed};
	
	var velocityDir = {x: accelerationDir.x, y: accelerationDir.y};
	var velocitySpeed = 100;
	var velocity = {x: velocityDir.x * velocitySpeed, y: velocityDir.y * velocitySpeed};
	
	var position = {x: begin.x, y: begin.y};
	
	var interval = setInterval(function(){
		if (distance(position, end) < 1) {
			clearInterval(interval);
		}
		var prevVelocity = {x: velocity.x, y: velocity.y};
		velocity.x += acceleration.x * dt;
		velocity.y += acceleration.y * dt;
		var nextVelocity = {x: velocity.x, y: velocity.y};
		
		position.x += (prevVelocity.x + nextVelocity.x) / 2 * dt;
		position.y += (prevVelocity.y + nextVelocity.y) / 2 * dt;
		
		moveCircle(circle, position.x, position.y);
	}, 1000 * dt);
}

function constantLinearTriangle(begin, end) {
	var triangle = addTriangle(begin.x, begin.y, 4, 0);
	var b = addTriangle(begin.x, begin.y, 4, 0, "red");
	var e = addTriangle(end.x, end.y, 4, 0, "green");
	
	var accelerationDir = {x: end.x - begin.x, y: end.y - begin.y};
	var dist = length(accelerationDir);
	accelerationDir = normalize(accelerationDir);
	var accelerationSpeed = 0;
	var acceleration = {x: accelerationDir.x * accelerationSpeed, y: accelerationDir.y * accelerationSpeed};
	
	var velocityDir = {x: accelerationDir.x, y: accelerationDir.y};
	var velocitySpeed = 100;
	var velocity = {x: velocityDir.x * velocitySpeed, y: velocityDir.y * velocitySpeed};
	
	var position = {x: begin.x, y: begin.y};
	
	rotateTriangle(b, velocityDir);
	rotateTriangle(e, velocityDir);
	
	var interval = setInterval(function(){
		if (distance(position, end) < 1) {
			clearInterval(interval);
		}
		var prevVelocity = {x: velocity.x, y: velocity.y};
		velocity.x += acceleration.x * dt;
		velocity.y += acceleration.y * dt;
		var nextVelocity = {x: velocity.x, y: velocity.y};
		
		position.x += (prevVelocity.x + nextVelocity.x) / 2 * dt;
		position.y += (prevVelocity.y + nextVelocity.y) / 2 * dt;
		
		moveTriangle(triangle, position.x, position.y);
		rotateTriangle(triangle, velocityDir);
	}, 1000 * dt);
}

function constantCircularCircle(center) {
	var circle = addCircle(center.x, center.y, 4, 0);
	var r = 100;
	var da = 2 * Math.PI / fps;
	addCircle(Math.round(center.x + r), Math.round(center.y), 4, "red");
	addCircle(Math.round(center.x + r), Math.round(center.y), 4, "green");
	
	var i = 0;
	var interval = setInterval(function(){
		var x = Math.round(center.x + r * Math.cos(i * da));
		var y = Math.round(center.y + r * Math.sin(i * da));
		moveCircle(circle, x, y);
		i++;
		if (i > fps) clearInterval(interval);
	}, 1000/fps);
}

function constantCircularTriangle(center) {
	var r = 100;
	var da = 2 * Math.PI / fps;
	
	var triangle = addTriangle(center.x, center.y, 4, 0);
	var b = addTriangle(Math.round(center.x + r), Math.round(center.y), 4, 0, "red");
	var e = addTriangle(Math.round(center.x + r), Math.round(center.y), 4, 0, "green");
	
	rotateTriangle(b, {x: 0, y: 1});
	rotateTriangle(e, {x: 0, y: 1});
	
	var i = 0;
	var interval = setInterval(function(){
		var x = Math.round(center.x + r * Math.cos(i * da));
		var y = Math.round(center.y + r * Math.sin(i * da));
		moveTriangle(triangle, x, y);
		rotateTriangle(triangle, {x: -Math.sin(i * da), y: Math.cos(i * da)});
		i++;
		if (i > fps) clearInterval(interval);
	}, 1000/fps);
}

function constantSpiralCircle(center) {
	var circle = addCircle(center.x, center.y, 4);
	var r = 1;
	var times = 2;
	var da = 2 * Math.PI / fps;
	addCircle(Math.round(center.x), Math.round(center.y), 4, "red");
	addCircle(Math.round(center.x + times * fps), Math.round(center.y), 4, "green");
	var i = 0;
	var interval = setInterval(function(){
		var x = Math.round(center.x + r * i * Math.cos(i * da));
		var y = Math.round(center.y + r * i * Math.sin(i * da));
		moveCircle(circle, x, y);
		i++;
		if (i > times * fps) clearInterval(interval);
	}, 1000/fps);
}

function constantSpiralTriangle(center) {
	var r = 1;
	var times = 2;
	var da = 2 * Math.PI / fps;
	var triangle = addTriangle(center.x, center.y, 4, 0);
	var b = addTriangle(Math.round(center.x), Math.round(center.y), 4, 0, "red");
	var e = addTriangle(Math.round(center.x + times * fps), Math.round(center.y), 4, 0, "green");
	rotateTriangle(b, {x: 0, y: 1});
	rotateTriangle(e, {x: 0, y: 1});
	
	var i = 0;
	var interval = setInterval(function(){
		var x = Math.round(center.x + r * i * Math.cos(i * da));
		var y = Math.round(center.y + r * i * Math.sin(i * da));
		moveTriangle(triangle, x, y);
		rotateTriangle(triangle, {x: -Math.sin(i * da), y: Math.cos(i * da)});
		i++;
		if (i > times * fps) clearInterval(interval);
	}, 1000/fps);
}

function constantBezierCircle(p0, p1, p2, p3) {
	var circle = addCircle(p0.x, p0.y, 4, 0);
	addCircle(Math.round(p0.x), Math.round(p0.y), 4, "red");
	addCircle(Math.round(p1.x), Math.round(p1.y), 4, "orange");
	addCircle(Math.round(p2.x), Math.round(p2.y), 4, "yellow");
	addCircle(Math.round(p3.x), Math.round(p3.y), 4, "green");
	var i = 0;
	var dt = 1/fps;
	var interval = setInterval(function(){
		var t = i * dt;
		var x = Math.round((1-t)*(1-t)*(1-t)*p0.x+3*t*(1-t)*(1-t)*p1.x+3*t*t*(1-t)*p2.x+t*t*t*p3.x);
		var y = Math.round((1-t)*(1-t)*(1-t)*p0.y+3*t*(1-t)*(1-t)*p1.y+3*t*t*(1-t)*p2.y+t*t*t*p3.y);
		moveCircle(circle, x, y);
		i++;
		if (i > fps) clearInterval(interval);
	}, 1000/fps);
}

function constantBezierTriangle(p0, p1, p2, p3) {
	var triangle = addTriangle(p0.x, p0.y, 4, 0);
	var q0 = addTriangle(Math.round(p0.x), Math.round(p0.y), 4, 0, "red");
	var q1 = addTriangle(Math.round(p1.x), Math.round(p1.y), 4, 0, "orange");
	var q2 = addTriangle(Math.round(p2.x), Math.round(p2.y), 4, 0, "yellow");
	var q3 = addTriangle(Math.round(p3.x), Math.round(p3.y), 4, 0, "green");
	rotateTriangle(q0, {x: slope(bezx, 0/3), y: slope(bezy, 0/3)});
	rotateTriangle(q1, {x: slope(bezx, 1/3), y: slope(bezy, 1/3)});
	rotateTriangle(q2, {x: slope(bezx, 2/3), y: slope(bezy, 2/3)});
	rotateTriangle(q3, {x: slope(bezx, 3/3), y: slope(bezy, 3/3)});
	
	function bezx(t) {return (1-t)*(1-t)*(1-t)*p0.x+3*t*(1-t)*(1-t)*p1.x+3*t*t*(1-t)*p2.x+t*t*t*p3.x;}
	function bezy(t) {return (1-t)*(1-t)*(1-t)*p0.y+3*t*(1-t)*(1-t)*p1.y+3*t*t*(1-t)*p2.y+t*t*t*p3.y;}
	
	var i = 0;
	var dt = 1/fps;
	var interval = setInterval(function(){
		var t = i * dt;
		var x = Math.round((1-t)*(1-t)*(1-t)*p0.x+3*t*(1-t)*(1-t)*p1.x+3*t*t*(1-t)*p2.x+t*t*t*p3.x);
		var y = Math.round((1-t)*(1-t)*(1-t)*p0.y+3*t*(1-t)*(1-t)*p1.y+3*t*t*(1-t)*p2.y+t*t*t*p3.y);
		moveTriangle(triangle, x, y);
		rotateTriangle(triangle, {x: slope(bezx, t), y: slope(bezy, t)});
		i++;
		if (i > fps) clearInterval(interval);
	}, 1000/fps);
}

function acceleratedLinearCircle(begin, end) {
	var circle = addCircle(begin.x, begin.y, 4);
	addCircle(begin.x, begin.y, 4, "red");
	addCircle(end.x, end.y, 4, "green");
	
	var accelerationDir = {x: end.x - begin.x, y: end.y - begin.y};
	var dist = length(accelerationDir);
	accelerationDir = normalize(accelerationDir);
	var accelerationSpeed = 10;
	var acceleration = {x: accelerationDir.x * accelerationSpeed, y: accelerationDir.y * accelerationSpeed};
	
	var velocityDir = {x: accelerationDir.x, y: accelerationDir.y};
	var velocitySpeed = 0;
	var velocity = {x: velocityDir.x * velocitySpeed, y: velocityDir.y * velocitySpeed};
	
	var position = {x: begin.x, y: begin.y};
	
	var interval = setInterval(function(){
		if (distance(position, end) < 1) {
			clearInterval(interval);
		}
		var prevVelocity = {x: velocity.x, y: velocity.y};
		velocity.x += acceleration.x * dt;
		velocity.y += acceleration.y * dt;
		var nextVelocity = {x: velocity.x, y: velocity.y};
		
		position.x += (prevVelocity.x + nextVelocity.x) / 2 * dt;
		position.y += (prevVelocity.y + nextVelocity.y) / 2 * dt;
		
		moveCircle(circle, position.x, position.y);
	}, 1000 * dt);
}

function acceleratedLinearTriangle(begin, end) {
	var triangle = addTriangle(begin.x, begin.y, 4, 0);
	var b = addTriangle(begin.x, begin.y, 4, 0, "red");
	var e = addTriangle(end.x, end.y, 4, 0, "green");
	
	var accelerationDir = {x: end.x - begin.x, y: end.y - begin.y};
	var dist = length(accelerationDir);
	accelerationDir = normalize(accelerationDir);
	var accelerationSpeed = 10;
	var acceleration = {x: accelerationDir.x * accelerationSpeed, y: accelerationDir.y * accelerationSpeed};
	
	var velocityDir = {x: accelerationDir.x, y: accelerationDir.y};
	var velocitySpeed = 0;
	var velocity = {x: velocityDir.x * velocitySpeed, y: velocityDir.y * velocitySpeed};
	
	var position = {x: begin.x, y: begin.y};
	
	rotateTriangle(b, velocityDir);
	rotateTriangle(e, velocityDir);
	
	var interval = setInterval(function(){
		if (distance(position, end) < 1) {
			clearInterval(interval);
		}
		var prevVelocity = {x: velocity.x, y: velocity.y};
		velocity.x += acceleration.x * dt;
		velocity.y += acceleration.y * dt;
		var nextVelocity = {x: velocity.x, y: velocity.y};
		
		position.x += (prevVelocity.x + nextVelocity.x) / 2 * dt;
		position.y += (prevVelocity.y + nextVelocity.y) / 2 * dt;
		
		moveTriangle(triangle, position.x, position.y);
		rotateTriangle(triangle, velocityDir);
	}, 1000 * dt);
}

function acceleratedCircularCircle(center) {
	var circle = addCircle(center.x, center.y, 4, 0);
	var r = 100;
	var da = 2 * Math.PI / fps;
	addCircle(Math.round(center.x + r), Math.round(center.y), 4, "red");
	addCircle(Math.round(center.x + r), Math.round(center.y), 4, "green");
	var i = 0;
	var interval = setInterval(function(){
		var x = Math.round(center.x + r * Math.cos(i * da));
		var y = Math.round(center.y + r * Math.sin(i * da));
		moveCircle(circle, x, y);
		i++;
		if (i > fps) clearInterval(interval);
	}, 1000/fps);
}

function acceleratedCircularTriangle(center) {
	var triangle = addTriangle(center.x, center.y, 4, 0);
	var r = 100;
	var da = 2 * Math.PI / fps;
	var b = addTriangle(Math.round(center.x + r), Math.round(center.y), 4, 0, "red");
	var e = addTriangle(Math.round(center.x + r), Math.round(center.y), 4, 0, "green");
	rotateTriangle(b, {x: 0, y: 1});
	rotateTriangle(e, {x: 0, y: 1});
	
	var i = 0;
	var interval = setInterval(function(){
		var x = Math.round(center.x + r * Math.cos(i * da));
		var y = Math.round(center.y + r * Math.sin(i * da));
		moveTriangle(triangle, x, y);
		rotateTriangle(triangle, {x: -Math.sin(i * da), y: Math.cos(i * da)});
		i++;
		if (i > fps) clearInterval(interval);
	}, 1000/fps);
}

function acceleratedSpiralCircle(center) {
	var circle = addCircle(center.x, center.y, 4);
	var r = 1;
	var times = 2;
	var da = 2 * Math.PI / fps;
	addCircle(Math.round(center.x), Math.round(center.y), 4, "red");
	addCircle(Math.round(center.x + times * fps), Math.round(center.y), 4, "green");
	var i = 0;
	var interval = setInterval(function(){
		var x = Math.round(center.x + r * i * Math.cos(i * da));
		var y = Math.round(center.y + r * i * Math.sin(i * da));
		moveCircle(circle, x, y);
		i++;
		if (i > times * fps) clearInterval(interval);
	}, 1000/fps);
}

function acceleratedSpiralTriangle(center) {
	var r = 1;
	var times = 2;
	var da = 2 * Math.PI / fps;
	var triangle = addTriangle(center.x, center.y, 4, 0);
	var b = addTriangle(Math.round(center.x), Math.round(center.y), 4, 0, "red");
	var e = addTriangle(Math.round(center.x + times * fps), Math.round(center.y), 4, 0, "green");
	rotateTriangle(b, {x: 0, y: 1});
	rotateTriangle(e, {x: 0, y: 1});
	
	var i = 0;
	var interval = setInterval(function(){
		var x = Math.round(center.x + r * i * Math.cos(i * da));
		var y = Math.round(center.y + r * i * Math.sin(i * da));
		moveTriangle(triangle, x, y);
		rotateTriangle(triangle, {x: -Math.sin(i * da), y: Math.cos(i * da)});
		i++;
		if (i > times * fps) clearInterval(interval);
	}, 1000/fps);
}

function acceleratedBezierCircle(p0, p1, p2, p3) {
	var circle = addCircle(p0.x, p0.y, 4, 0);
	addCircle(Math.round(p0.x), Math.round(p0.y), 4, "red");
	addCircle(Math.round(p1.x), Math.round(p1.y), 4, "orange");
	addCircle(Math.round(p2.x), Math.round(p2.y), 4, "yellow");
	addCircle(Math.round(p3.x), Math.round(p3.y), 4, "green");
	var i = 0;
	var dt = 1/fps;
	var interval = setInterval(function(){
		var t = i * dt;
		var x = Math.round((1-t)*(1-t)*(1-t)*p0.x+3*t*(1-t)*(1-t)*p1.x+3*t*t*(1-t)*p2.x+t*t*t*p3.x);
		var y = Math.round((1-t)*(1-t)*(1-t)*p0.y+3*t*(1-t)*(1-t)*p1.y+3*t*t*(1-t)*p2.y+t*t*t*p3.y);
		moveCircle(circle, x, y);
		i++;
		if (i > fps) clearInterval(interval);
	}, 1000/fps);
}

function acceleratedBezierTriangle(p0, p1, p2, p3) {
	var triangle = addTriangle(p0.x, p0.y, 4, 0);
	var q0 = addTriangle(Math.round(p0.x), Math.round(p0.y), 4, 0, "red");
	var q1 = addTriangle(Math.round(p1.x), Math.round(p1.y), 4, 0, "orange");
	var q2 = addTriangle(Math.round(p2.x), Math.round(p2.y), 4, 0, "yellow");
	var q3 = addTriangle(Math.round(p3.x), Math.round(p3.y), 4, 0, "green");
	rotateTriangle(q0, {x: slope(bezx, 0/3), y: slope(bezy, 0/3)});
	rotateTriangle(q1, {x: slope(bezx, 1/3), y: slope(bezy, 1/3)});
	rotateTriangle(q2, {x: slope(bezx, 2/3), y: slope(bezy, 2/3)});
	rotateTriangle(q3, {x: slope(bezx, 3/3), y: slope(bezy, 3/3)});
	
	function bezx(t) {return (1-t)*(1-t)*(1-t)*p0.x+3*t*(1-t)*(1-t)*p1.x+3*t*t*(1-t)*p2.x+t*t*t*p3.x;}
	function bezy(t) {return (1-t)*(1-t)*(1-t)*p0.y+3*t*(1-t)*(1-t)*p1.y+3*t*t*(1-t)*p2.y+t*t*t*p3.y;}
	
	var i = 0;
	var dt = 1/fps;
	var interval = setInterval(function(){
		var t = i * dt;
		var x = Math.round((1-t)*(1-t)*(1-t)*p0.x+3*t*(1-t)*(1-t)*p1.x+3*t*t*(1-t)*p2.x+t*t*t*p3.x);
		var y = Math.round((1-t)*(1-t)*(1-t)*p0.y+3*t*(1-t)*(1-t)*p1.y+3*t*t*(1-t)*p2.y+t*t*t*p3.y);
		moveTriangle(triangle, x, y);
		rotateTriangle(triangle, {x: slope(bezx, t), y: slope(bezy, t)});
		i++;
		if (i > fps) clearInterval(interval);
	}, 1000/fps);
}