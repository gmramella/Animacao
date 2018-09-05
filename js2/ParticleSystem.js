function ParticleSystem(id, trajectory, position, speed, size, shape, color, alpha, duration) {
	var counter = 0;
	var particles = [];
	var num = 8;
	var currentWave = waves;
	var waveDt = 500;
	
	switch (shape) {
		case "circle":
			switch (emitter) {
				case "point":
					var angle = (360 / num);
					var acc = 10;
					for (var i = 0; i < num; i++) {
						var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
						var velocity = {x: speed * dir.x, y: speed * dir.y};
						var acceleration = {x: acc * dir.x, y: acc * dir.y};
						particles.push(new Particle(shape+counter, trajectory, position, velocity, acceleration, size, shape, color, 1, 4000));
						counter++;
					}
					currentWave--;
					var interval2 = setInterval(function(){
						if (currentWave == 0) {
							clearInterval(interval2);
						} else {
							var angle = (360 / num);
							var acc = 10;
							for (var i = 0; i < num; i++) {
								var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
								var velocity = {x: speed * dir.x, y: speed * dir.y};
								var acceleration = {x: acc * dir.x, y: acc * dir.y};
								particles.push(new Particle(shape+counter, trajectory, position, velocity, acceleration, size, shape, color, 1, 4000));
								counter++;
							}
							currentWave--;
						}
					}, waveDt);
					break;
				case "square":
					var side = 10;
					var angle = (360 / 8);
					var acc = 10;
					for (var i = 0; i < 8; i++) {
						var pos = new Vec2(position);
						pos.add({x: side * Math.sqrt(1 + i % 2) * Math.cos(angle * i * Math.PI / 180), y: side * Math.sqrt(1 + i % 2) * -Math.sin(angle * i * Math.PI / 180)});
						var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
						var velocity = {x: speed * dir.x, y: speed * dir.y};
						var acceleration = {x: acc * dir.x, y: acc * dir.y};
						particles.push(new Particle(shape+counter, trajectory, pos, velocity, acceleration, size, shape, color, 1, 4000));
						counter++;
					}
					currentWave--;
					var interval2 = setInterval(function(){
						if (currentWave == 0) {
							clearInterval(interval2);
						} else {
							var angle = (360 / 8);
							var acc = 10;
							for (var i = 0; i < 8; i++) {
								var pos = new Vec2(position);
								pos.add({x: side * Math.sqrt(1 + i % 2) * Math.cos(angle * i * Math.PI / 180), y: side * Math.sqrt(1 + i % 2) * -Math.sin(angle * i * Math.PI / 180)});
								var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
								var velocity = {x: speed * dir.x, y: speed * dir.y};
								var acceleration = {x: acc * dir.x, y: acc * dir.y};
								particles.push(new Particle(shape+counter, trajectory, pos, velocity, acceleration, size, shape, color, 1, 4000));
								counter++;
							}
							currentWave--;
						}
					}, waveDt);
					break;
			}
			break;
		case "hex":
			switch (emitter) {
				case "point":
					var angle = (360 / num);
					var acc = 10;
					for (var i = 0; i < num; i++) {
						var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
						var velocity = {x: speed * dir.x, y: speed * dir.y};
						var acceleration = {x: acc * dir.x, y: acc * dir.y};
						particles.push(new Particle(shape+counter, trajectory, position, velocity, acceleration, size, shape, color, 1, 4000));
						counter++;
					}
					currentWave--;
					var interval2 = setInterval(function(){
						if (currentWave == 0) {
							clearInterval(interval2);
						} else {
							var angle = (360 / num);
							var acc = 10;
							for (var i = 0; i < num; i++) {
								var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
								var velocity = {x: speed * dir.x, y: speed * dir.y};
								var acceleration = {x: acc * dir.x, y: acc * dir.y};
								particles.push(new Particle(shape+counter, trajectory, position, velocity, acceleration, size, shape, color, 1, 4000));
								counter++;
							}
							currentWave--;
						}
					}, waveDt);
					break;
				case "square":
					var side = 10;
					var angle = (360 / 8);
					var acc = 10;
					for (var i = 0; i < 8; i++) {
						var pos = new Vec2(position);
						pos.add({x: side * Math.sqrt(1 + i % 2) * Math.cos(angle * i * Math.PI / 180), y: side * Math.sqrt(1 + i % 2) * -Math.sin(angle * i * Math.PI / 180)});
						var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
						var velocity = {x: speed * dir.x, y: speed * dir.y};
						var acceleration = {x: acc * dir.x, y: acc * dir.y};
						particles.push(new Particle(shape+counter, trajectory, pos, velocity, acceleration, size, shape, color, 1, 4000));
						counter++;
					}
					currentWave--;
					var interval2 = setInterval(function(){
						if (currentWave == 0) {
							clearInterval(interval2);
						} else {
							var angle = (360 / 8);
							var acc = 10;
							for (var i = 0; i < 8; i++) {
								var pos = new Vec2(position);
								pos.add({x: side * Math.sqrt(1 + i % 2) * Math.cos(angle * i * Math.PI / 180), y: side * Math.sqrt(1 + i % 2) * -Math.sin(angle * i * Math.PI / 180)});
								var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
								var velocity = {x: speed * dir.x, y: speed * dir.y};
								var acceleration = {x: acc * dir.x, y: acc * dir.y};
								particles.push(new Particle(shape+counter, trajectory, pos, velocity, acceleration, size, shape, color, 1, 4000));
								counter++;
							}
							currentWave--;
						}
					}, waveDt);
					break;
			}
			break;
		case "rect":
			switch (emitter) {
				case "point":
					var angle = (360 / num);
					var acc = 10;
					for (var i = 0; i < num; i++) {
						var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
						var velocity = {x: speed * dir.x, y: speed * dir.y};
						var acceleration = {x: acc * dir.x, y: acc * dir.y};
						particles.push(new Particle(shape+counter, trajectory, {x: position.x - size / 2, y: position.y - size / 2}, velocity, acceleration, {x: size, y: size}, shape, color, 1, 4000));
						counter++;
					}
					currentWave--;
					var interval2 = setInterval(function(){
						if (currentWave == 0) {
							clearInterval(interval2);
						} else {
							var angle = (360 / num);
							var acc = 10;
							for (var i = 0; i < num; i++) {
								var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
								var velocity = {x: speed * dir.x, y: speed * dir.y};
								var acceleration = {x: acc * dir.x, y: acc * dir.y};
								particles.push(new Particle(shape+counter, trajectory, {x: position.x - size / 2, y: position.y - size / 2}, velocity, acceleration, {x: size, y: size}, shape, color, 1, 4000));
								counter++;
							}
							currentWave--;
						}
					}, waveDt);
					break;
				case "square":
					var side = 10;
					var angle = (360 / 8);
					var acc = 10;
					for (var i = 0; i < 8; i++) {
						var pos = new Vec2(position);
						pos.add({x: side * Math.sqrt(1 + i % 2) * Math.cos(angle * i * Math.PI / 180), y: side * Math.sqrt(1 + i % 2) * -Math.sin(angle * i * Math.PI / 180)});
						var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
						var velocity = {x: speed * dir.x, y: speed * dir.y};
						var acceleration = {x: acc * dir.x, y: acc * dir.y};
						particles.push(new Particle(shape+counter, trajectory, {x: pos.x - size / 2, y: pos.y - size / 2}, velocity, acceleration, {x: size, y: size}, shape, color, 1, 4000));
						counter++;
					}
					currentWave--;
					var interval2 = setInterval(function(){
						if (currentWave == 0) {
							clearInterval(interval2);
						} else {
							var angle = (360 / 8);
							var acc = 10;
							for (var i = 0; i < 8; i++) {
								var pos = new Vec2(position);
								pos.add({x: side * Math.sqrt(1 + i % 2) * Math.cos(angle * i * Math.PI / 180), y: side * Math.sqrt(1 + i % 2) * -Math.sin(angle * i * Math.PI / 180)});
								var dir = {x: Math.cos(angle * i * Math.PI / 180), y: -Math.sin(angle * i * Math.PI / 180)};
								var velocity = {x: speed * dir.x, y: speed * dir.y};
								var acceleration = {x: acc * dir.x, y: acc * dir.y};
								particles.push(new Particle(shape+counter, trajectory, {x: pos.x - size / 2, y: pos.y - size / 2}, velocity, acceleration, {x: size, y: size}, shape, color, 1, 4000));
								counter++;
							}
							currentWave--;
						}
					}, waveDt);
					break;
			}
		break;
	}
	
	this.kill = function() {
		for (var i = 0; i < particles.length; i++) {
			particles[i].die();
		}
		clearInterval(interval2);
	}
}