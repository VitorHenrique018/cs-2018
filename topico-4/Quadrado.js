function Quadrado (n){

	if( n < 1){
		return false;
	}
var i = 1;
var s = 1;

while(s<n){
	i= i + 2;
	s = s + i;

}
return s == n;
	
}

console.log(Quadrado(14));