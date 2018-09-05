function addCircle(cx, cy, r, color="black") {
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", cx);
	circle.setAttribute("cy", cy);
	circle.setAttribute("r", r);
	circle.setAttribute("fill", color);
	svg.appendChild(circle);
	return circle;
}

function moveCircle(ref, cx, cy) {
	ref.setAttribute("cx", cx);
	ref.setAttribute("cy", cy);
}

function addTriangle(cx, cy, r, a, color="black") {
	var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
	var points = "-"+r+" -"+r+", "+"-"+r+" "+r+", "+r+" "+0;
	polygon.setAttribute("points", points);
	polygon.setAttribute("fill", color);
	var rotate = "rotate("+a+","+0+","+0+")";
	var translate = "translate("+cx+","+cy+")";
	polygon.setAttribute("transform", translate+" "+rotate);
	svg.appendChild(polygon);
	return polygon;
}

function moveTriangle(ref, cx, cy) {
	var transform = ref.getAttribute("transform");
	var translate = "translate("+cx+","+cy+")";
	var rotate = transform.split(" ")[1];
	ref.setAttribute("transform", translate+" "+rotate);
}

function rotateTriangle(ref, dir) {
	var transform = ref.getAttribute("transform");
	var translate = transform.split(" ")[0];
	var angle = Math.atan2(dir.y, dir.x) * 180 / Math.PI;
	var rotate = "rotate("+angle+","+0+","+0+")";
	ref.setAttribute("transform", translate+" "+rotate);
}