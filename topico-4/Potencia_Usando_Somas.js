function Potencia(x,y){

	if(x<0 || y < 0){
		return false;
	}
	var potencia = 1;
	var i = 1;

	while(i <= y){
		potencia = potencia * x;
		i = i+1;
	}

	return potencia;


}
console.log(Potencia(4,4));