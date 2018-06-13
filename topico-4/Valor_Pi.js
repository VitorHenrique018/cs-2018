function Pi(n){

	if( n < 1){
		return false;
	}

	var i = 1;
	var s = -1;
	var d = -1;
	var p = 0;

	while (i <= n){

		d = d + 2;
		s = -1 * s;
		p = (p + 4 * s) / d;
		i = i + 1;
	}

	return p;
}

console.log(Pi(3));