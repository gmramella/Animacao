function Vec2(v) {
	this.x = v.x;
	this.y = v.y;
	
	this.add = function(v) {
		this.x += v.x;
		this.y += v.y;
	}
	
	this.scale = function(a) {
		return {x: this.x * a, y: this.y * a};
	}
	
	this.average = function(v) {
		return {x: (this.x + v.x) / 2, y: (this.y + v.y) / 2};
	}
}