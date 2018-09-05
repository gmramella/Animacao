function runAnimationConstant() {
	document.getElementById("inputs").style.display="none";
	
	var constantLinearCircleStart = {x: Number(document.getElementById("constantLinearCircleStartX").value), y: Number(document.getElementById("constantLinearCircleStartY").value)};
	var constantLinearCircleEnd = {x: Number(document.getElementById("constantLinearCircleEndX").value), y: Number(document.getElementById("constantLinearCircleEndY").value)};
	
	var constantCircularCircleStart = {x: Number(document.getElementById("constantCircularCircleStartX").value), y: Number(document.getElementById("constantCircularCircleStartY").value)};
	
	var constantSpiralCircleStart = {x: Number(document.getElementById("constantSpiralCircleStartX").value), y: Number(document.getElementById("constantSpiralCircleStartY").value)};
	
	var constantBezierCircleP0 = {x: Number(document.getElementById("constantBezierCircleP0X").value), y: Number(document.getElementById("constantBezierCircleP0Y").value)};
	var constantBezierCircleP1 = {x: Number(document.getElementById("constantBezierCircleP1X").value), y: Number(document.getElementById("constantBezierCircleP1Y").value)};
	var constantBezierCircleP2 = {x: Number(document.getElementById("constantBezierCircleP2X").value), y: Number(document.getElementById("constantBezierCircleP2Y").value)};
	var constantBezierCircleP3 = {x: Number(document.getElementById("constantBezierCircleP3X").value), y: Number(document.getElementById("constantBezierCircleP3Y").value)};
	
	var constantLinearTriangleStart = {x: Number(document.getElementById("constantLinearTriangleStartX").value), y: Number(document.getElementById("constantLinearTriangleStartY").value)};
	var constantLinearTriangleEnd = {x: Number(document.getElementById("constantLinearTriangleEndX").value), y: Number(document.getElementById("constantLinearTriangleEndY").value)};
	
	var constantCircularTriangleStart = {x: Number(document.getElementById("constantCircularTriangleStartX").value), y: Number(document.getElementById("constantCircularTriangleStartY").value)};
	
	var constantSpiralTriangleStart = {x: Number(document.getElementById("constantSpiralTriangleStartX").value), y: Number(document.getElementById("constantSpiralTriangleStartY").value)};
	
	var constantBezierTriangleP0 = {x: Number(document.getElementById("constantBezierTriangleP0X").value), y: Number(document.getElementById("constantBezierTriangleP0Y").value)};
	var constantBezierTriangleP1 = {x: Number(document.getElementById("constantBezierTriangleP1X").value), y: Number(document.getElementById("constantBezierTriangleP1Y").value)};
	var constantBezierTriangleP2 = {x: Number(document.getElementById("constantBezierTriangleP2X").value), y: Number(document.getElementById("constantBezierTriangleP2Y").value)};
	var constantBezierTriangleP3 = {x: Number(document.getElementById("constantBezierTriangleP3X").value), y: Number(document.getElementById("constantBezierTriangleP3Y").value)};
	
	constantLinearCircle(constantLinearCircleStart, constantLinearCircleEnd);
	constantCircularCircle(constantCircularCircleStart);
	constantSpiralCircle(constantSpiralCircleStart);
	constantBezierCircle(constantBezierCircleP0, constantBezierCircleP1, constantBezierCircleP2, constantBezierCircleP3);
	
	constantLinearTriangle(constantLinearTriangleStart, constantLinearTriangleEnd);
	constantCircularTriangle(constantCircularTriangleStart);
	constantSpiralTriangle(constantSpiralTriangleStart);
	constantBezierTriangle(constantBezierTriangleP0, constantBezierTriangleP1, constantBezierTriangleP2, constantBezierTriangleP3);
}

function runAnimationAccelerated() {
	document.getElementById("inputs").style.display="none";
	
	var acceleratedLinearCircleStart = {x: Number(document.getElementById("acceleratedLinearCircleStartX").value), y: Number(document.getElementById("acceleratedLinearCircleStartY").value)};
	var acceleratedLinearCircleEnd = {x: Number(document.getElementById("acceleratedLinearCircleEndX").value), y: Number(document.getElementById("acceleratedLinearCircleEndY").value)};
	
	var acceleratedCircularCircleStart = {x: Number(document.getElementById("acceleratedCircularCircleStartX").value), y: Number(document.getElementById("acceleratedCircularCircleStartY").value)};
	
	var acceleratedSpiralCircleStart = {x: Number(document.getElementById("acceleratedSpiralCircleStartX").value), y: Number(document.getElementById("acceleratedSpiralCircleStartY").value)};
	
	var acceleratedBezierCircleP0 = {x: Number(document.getElementById("acceleratedBezierCircleP0X").value), y: Number(document.getElementById("acceleratedBezierCircleP0Y").value)};
	var acceleratedBezierCircleP1 = {x: Number(document.getElementById("acceleratedBezierCircleP1X").value), y: Number(document.getElementById("acceleratedBezierCircleP1Y").value)};
	var acceleratedBezierCircleP2 = {x: Number(document.getElementById("acceleratedBezierCircleP2X").value), y: Number(document.getElementById("acceleratedBezierCircleP2Y").value)};
	var acceleratedBezierCircleP3 = {x: Number(document.getElementById("acceleratedBezierCircleP3X").value), y: Number(document.getElementById("acceleratedBezierCircleP3Y").value)};
	
	var acceleratedLinearTriangleStart = {x: Number(document.getElementById("acceleratedLinearTriangleStartX").value), y: Number(document.getElementById("acceleratedLinearTriangleStartY").value)};
	var acceleratedLinearTriangleEnd = {x: Number(document.getElementById("acceleratedLinearTriangleEndX").value), y: Number(document.getElementById("acceleratedLinearTriangleEndY").value)};
	
	var acceleratedCircularTriangleStart = {x: Number(document.getElementById("acceleratedCircularTriangleStartX").value), y: Number(document.getElementById("acceleratedCircularTriangleStartY").value)};
	
	var acceleratedSpiralTriangleStart = {x: Number(document.getElementById("acceleratedSpiralTriangleStartX").value), y: Number(document.getElementById("acceleratedSpiralTriangleStartY").value)};
	
	var acceleratedBezierTriangleP0 = {x: Number(document.getElementById("acceleratedBezierTriangleP0X").value), y: Number(document.getElementById("acceleratedBezierTriangleP0Y").value)};
	var acceleratedBezierTriangleP1 = {x: Number(document.getElementById("acceleratedBezierTriangleP1X").value), y: Number(document.getElementById("acceleratedBezierTriangleP1Y").value)};
	var acceleratedBezierTriangleP2 = {x: Number(document.getElementById("acceleratedBezierTriangleP2X").value), y: Number(document.getElementById("acceleratedBezierTriangleP2Y").value)};
	var acceleratedBezierTriangleP3 = {x: Number(document.getElementById("acceleratedBezierTriangleP3X").value), y: Number(document.getElementById("acceleratedBezierTriangleP3Y").value)};
	
	acceleratedLinearCircle(acceleratedLinearCircleStart, acceleratedLinearCircleEnd);
	acceleratedCircularCircle(acceleratedCircularCircleStart);
	acceleratedSpiralCircle(acceleratedSpiralCircleStart);
	acceleratedBezierCircle(acceleratedBezierCircleP0, acceleratedBezierCircleP1, acceleratedBezierCircleP2, acceleratedBezierCircleP3);
	
	acceleratedLinearTriangle(acceleratedLinearTriangleStart, acceleratedLinearTriangleEnd);
	acceleratedCircularTriangle(acceleratedCircularTriangleStart);
	acceleratedSpiralTriangle(acceleratedSpiralTriangleStart);
	acceleratedBezierTriangle(acceleratedBezierTriangleP0, acceleratedBezierTriangleP1, acceleratedBezierTriangleP2, acceleratedBezierTriangleP3);
}