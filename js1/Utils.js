function gaussian(t, sigma, mi) {
	return (1/(sigma*Math.sqrt(2*Math.PI)))*Math.exp(-((t-mi)*(t-mi))/(2*sigma*sigma));
}

function slope(f, x) {
	var dx=1e-6;
	return (f(x+dx)-f(x))/dx;
}

function length(v) {
	return Math.sqrt(v.x*v.x+v.y*v.y);
}

function distance(u, v) {
	return Math.sqrt((v.x - u.x)*(v.x-u.x)+(v.y-u.y)*(v.y-u.y));
}

function normalize(v) {
	var l = Math.sqrt(v.x*v.x+v.y*v.y);
	return {x: v.x/l, y: v.y/l};
}

function bhaskara(a,b,c) {
	return {x1: (-b+Math.sqrt(b*b-4*a*c))/2, x2: (-b-Math.sqrt(b*b-4*a*c))/2};
}