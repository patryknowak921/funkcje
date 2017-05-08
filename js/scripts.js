var a = prompt('Wpisz wartość a');
var h = prompt('Wpisz wartość h');

function getTriangleArea(a, h) {
	if ( (a > 0) && (h > 0) ) {
		return a*h/2;
	} else {
    	console.log('Nieprawidłowe dane');
    	return;
	}
}

console.log( getTriangleArea(a,h) );