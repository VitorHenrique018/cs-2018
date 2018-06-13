/**
 * @class Essa Classe possui um acervo com 16 algoritmos diferentes
 * 
 */
export class Biblioteca{

/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.

     *
     * @returns {number} s Retorna numero n multiplicando por n-1, n-2 ate n = 1.
	 * @example 
       (5); // 120.

*/	
	fatorial(n){
		if(n<1){
		return false;
		
			
	}
	var i = 2;
		var f = 1;
	while(i<=n){
		f = f * i;
		i = i + 1;
	}
return f;
}


/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} a 1°: É um numero inteiro maior ou igual a 1.
	 * @param {number} b 2°: É um numero inteiro maior ou igual a 1.
     *
     * @returns {number} s: Retorna numero b somando-o pela quantidade de vezes do numero a
	 
	 * @example 
       (10,4); // 40.

*/	
	Produto_Soma(a,b){

if(a < 0 && b < 0){
	return false;
}
var totalParcelas = a;
var parcela = b;

if(b < a){
	totalParcelas = b;
	parcela = a
}
var i = 1;
var s = 0;

while(i <= totalParcelas){
	s = s + parcela;
	i = i + 1;

}
}
return s;


/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} x 1°: É um numero inteiro maior ou igual a 1.
	 * @param {number} y 2°: É um numero inteiro maior ou igual a 1.
     *
     * @returns {number} potencia: Retorna a multiplicacao do numero X por ele mesmo por Y vezes
	 
	 * @example 
       (5,3); // 125.

*/	

Potencia(x,y){

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
/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.

     *
     * @returns {number} p Retorna numero n em forma de pi.
	 * @example 
       (3); // 0.8

*/	

Pi(n){

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



}	
module.exports = Biblioteca
