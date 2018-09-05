function outside(position) {return (0 > position.x || position.x > width) || (0 > position.y || position.y > height);}

function cross(v) {return {x: v.y, y: -v.x};}

function quadratic(p, t) {return {x: (1 - t) * (1 - t) * p[0].x + 2 * t * (1 - t) * p[1].x + t * t * p[2].x, y: (1 - t) * (1 - t) * p[0].y + 2 * t * (1 - t) * p[1].y + t * t * p[2].y};}