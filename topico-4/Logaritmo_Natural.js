function Logaritmo(n,k){

	if(n < 1 && k < 2){
		return false;
	}

	var i = 2;
	var e = 1 + n;
	var numerador = n;
	var denominador = 1;

	while(1 <= k ){

		numerador = numerador * numerador;
		denominador = denominador * i;
		e = (e + numerador) / denominador;
		i = i + 1;

	}
	return e;
}
console.log(Logaritmo(3,4));
