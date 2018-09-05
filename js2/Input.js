document.addEventListener("keypress", keypressCallback);
document.addEventListener("click", clickCallback);

function keypressCallback(e) {
	switch (e.keyCode||e.which) {
		case 'c'.charCodeAt(0): shape = "circle";break;
		case 'C'.charCodeAt(0): shape = "circle";break;
		case 'h'.charCodeAt(0): shape = "hex";break;
		case 'H'.charCodeAt(0): shape = "hex";break;
		case 'r'.charCodeAt(0): shape = "rect";break;
		case 'R'.charCodeAt(0): shape = "rect";break;
		
		case 'b'.charCodeAt(0): trajectory = "bezier";break;
		case 'B'.charCodeAt(0): trajectory = "bezier";break;
		case 'l'.charCodeAt(0): trajectory = "linear";break;
		case 'L'.charCodeAt(0): trajectory = "linear";break;
		case 's'.charCodeAt(0): trajectory = "spiral";break;
		case 'S'.charCodeAt(0): trajectory = "spiral";break;
		
		case 'q'.charCodeAt(0): waves--;if (waves == 0) waves = 1;break;
		case 'Q'.charCodeAt(0): waves--;if (waves == 0) waves = 1;break;
		case 'w'.charCodeAt(0): waves++;if (waves == 11) waves = 10;break;
		case 'W'.charCodeAt(0): waves++;if (waves == 11) waves = 10;break;
		
		case 43: size++;if (size == 71) size = 70;break;
		case 45: size--;if (size == 0) size = 1;break;
		
		case 49: color.r = (color.r+255) % 256;break;
		case 50: color.g = (color.g+255) % 256;break;
		case 51: color.b = (color.b+255) % 256;break;
		case 52: color.r = ++color.r % 256;break;
		case 53: color.g = ++color.g % 256;break;
		case 54: color.b = ++color.b % 256;break;
		
		case 'o'.charCodeAt(0): emitter = "square";break;
		case 'O'.charCodeAt(0): emitter = "square";break;
		case 'p'.charCodeAt(0): emitter = "point";break;
		case 'P'.charCodeAt(0): emitter = "point";break;
		
		case 32: e.preventDefault();reset = !reset;break;
	}
}

function clickCallback(e) {
	if (reset) {
		for (var i = 0; i < ps.length; i++) {
			if (ps[i]) ps[i].kill();
		}
		ps = [];
		psCounter = 0;
	}
	ps.push(new ParticleSystem(psCounter++, trajectory, {x: e.clientX-8, y: e.clientY-8}, 10, size, shape, color, 1, 4000));
}