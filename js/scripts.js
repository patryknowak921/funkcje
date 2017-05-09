var triangle1Area = getTriangleArea(prompt('podaj a'), prompt('podaj h'));
console.log(triangle1Area);
var triangle2Area = getTriangleArea(prompt('podaj a'), prompt('podaj h'));
console.log(triangle2Area);
var triangle3Area = getTriangleArea(prompt('podaj a'), prompt('podaj h'));
console.log(triangle3Area);

function getTriangleArea(a, h) {
	if ( (a > 0) && (h > 0) ) {
		return a*h/2;
	} else {
    	console.log('Nieprawidłowe dane');
    	return;
	}
}

console.log( getTriangleArea(a,h) );