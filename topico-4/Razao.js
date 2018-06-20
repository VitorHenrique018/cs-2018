function Razao(x,y,k){

	if( x < 0 && x > y && k < 0){
		return false;
	}

	var c = y;
	var a = x;
	var i = 1;


	while(i<=k){
		var t = c;
		c = c + a;
		a = t;
		i = i + 1;
	}

	return c/a;
}

console.log(Razao(2,12,4));