function Raiz (n,i){

	if( n < 1){
		return false;
	}

var r = 1;

while(0 <= i){

	r = (r + n/r) / 2;
	
	i = i - 1;

}
return r;
}

console.log(Raiz(81,7));