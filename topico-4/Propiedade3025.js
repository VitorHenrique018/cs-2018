function Propiedade3025(n){

	if( n <= 0 || n >= 9999)
		return false;

var i = Math.trunc(n / 100);
var j = Math.trunc(n % 100);

var k = i+j;

return k*k == n;

}

console.log(Propiedade3025(0001));