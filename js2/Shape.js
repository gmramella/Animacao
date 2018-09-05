function createCircle(id, position, r, color, alpha) {
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("id", id);
	circle.setAttribute("cx", position.x);
	circle.setAttribute("cy", position.y);
	circle.setAttribute("r", r);
	circle.setAttribute("fill", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	circle.setAttribute("fill-opacity", alpha);
	svg.appendChild(circle);
	return circle;
}

function updateCircle(id, position, r, color, alpha) {
	var circle = document.getElementById(id);
	circle.setAttribute("cx", position.x);
	circle.setAttribute("cy", position.y);
	circle.setAttribute("r", r);
	circle.setAttribute("fill", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	circle.setAttribute("fill-opacity", alpha);
}

function createHex(id, position, size, color, alpha) {
	var positions = "";
	var angle = 360 / 6;
	var i;
	for (i = 0; i < 6; i++) {
		positions += position.x + size * Math.cos(angle * i * Math.PI / 180) + " ";
		positions += position.y + size * Math.sin(angle * i * Math.PI / 180) + " ";
	}
	i = 0;
	positions += position.x + size * Math.cos(angle * i * Math.PI / 180) + " ";
	positions += position.y + size * Math.sin(angle * i * Math.PI / 180) + " ";
	var hex = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
	hex.setAttribute("id", id);
	hex.setAttribute("points", positions);
	hex.setAttribute("fill", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	hex.setAttribute("fill-opacity", alpha);
	hex.setAttribute("stroke", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	svg.appendChild(hex);
	return hex;
}

function updateHex(id, position, size, color, alpha) {
	var positions = "";
	var angle = 360 / 6;
	var i;
	for (i = 0; i < 6; i++) {
		positions += position.x + size * Math.cos(angle * i * Math.PI / 180) + " ";
		positions += position.y + size * Math.sin(angle * i * Math.PI / 180) + " ";
	}
	i = 0;
	positions += position.x + size * Math.cos(angle * i * Math.PI / 180) + " ";
	positions += position.y + size * Math.sin(angle * i * Math.PI / 180) + " ";
	var hex = document.getElementById(id);
	hex.setAttribute("points", positions);
	hex.setAttribute("fill", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	hex.setAttribute("fill-opacity", alpha);
	hex.setAttribute("stroke", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
}

function createRect(id, position, r, color, alpha) {
	var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rect.setAttribute("id", id);
	rect.setAttribute("x", position.x);
	rect.setAttribute("y", position.y);
	rect.setAttribute("width", r.x);
	rect.setAttribute("height", r.y);
	rect.setAttribute("fill", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	rect.setAttribute("fill-opacity", alpha);
	rect.setAttribute("stroke", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	svg.appendChild(rect);
	return rect;
}

function updateRect(id, position, r, color, alpha) {
	var rect = document.getElementById(id);
	rect.setAttribute("x", position.x);
	rect.setAttribute("y", position.y);
	rect.setAttribute("width", r.x);
	rect.setAttribute("height", r.y);
	rect.setAttribute("fill", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	rect.setAttribute("fill-opacity", alpha);
	rect.setAttribute("stroke", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
}

function deleteShape(id) {
	try {
		svg.removeChild(document.getElementById(id));
	} catch(err) {}
}