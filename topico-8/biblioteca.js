/**
 * @class Essa Classe possui um acervo com 16 algoritmos diferentes
 *
*/
export class Biblioteca{

/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} n Unico Argumento: É um numero inteiro
     * maior ou igual a 1.

     *
     *@returns {number} s Retorna numero n multiplicando por
     * n-1, n-2 ate n = 1.
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
			parcela = a;
		}
		var i = 1;
		var s = 0;

		while(i <= totalParcelas){
			s = s + parcela;
			i = i + 1;

		}
		return s;
	}


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

	/**
     * O logaritmo natural é uma função que é o expoente de uma potência de e
     *
     * @param {number} n 1°: É um numero inteiro maior ou igual a 1.
	 * @param {number} k 2°: É um numero inteiro maior ou igual a 2.
     *
     * @returns {number} e : Retorna a pontecia de n + 1 pela denominador  * i.
	 
	 * @example 
       (5,2); // 18.5

*/
	Logaritmo(n,k){

		if(n < 1 && k < 2){
			return false;
		}

		var i = 2;
		var e = 1 + n;
		var numerador = n;
		var denominador = 1;

		while(i <= k ){

			numerador = numerador * numerador;
			denominador = denominador * i;
			e = e + numerador / denominador;
			i = i + 1;

		}
		return e;
	}

	/**
     * A razao Aurea é feita pelo segmento mais longo da reta dividida 
     * pelo segmento menor seja igual à reta completa dividida pelo 
     * segmento mais longo.
     *
     * @param {number} x 1°: É um numero inteiro maior ou igual a 1.
	 * @param {number} y 2°: É um numero inteiro maior ou igual a x.
	 * @param {number} k 2°: É um numero inteiro maior ou igual a 1.
     *
     * @returns {number} c/a : Retorna O maior numero pélo Menor
	 
	 * @example 
       (2,12,4); // 1.65

*/
	Razao(x,y,k){

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

	/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.
     *
     * @returns {boolean} s==n Retorna se o numero Fornecido (n) é quadrado Perfeito ou nao
     * 
	 * @example 
       (36); // true
	 * @example 
       (14); // false       

*/	


	Quadrado (n){

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
	/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} n 1°: É um numero inteiro maior ou igual a 1.
	 * @param {number} i 2°: É um numero inteiro.
     *
     * @returns {number} r: Retorna a raiz quadrada de N, e quanto maior o 
     * numero I maior é a precisao da raiz quadrada
     * 
	 * @example 
       (81,4); // 9.014272376994608    
     * @example 
       (81,7); // 9. 

*/	
	Raiz (n,i){

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

	/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.
     *
     * @returns {boolean} Retorna se o numero Fornecido (n) é Primo ou nao, ou seja,
     * se o numero N é divisivel por outro numero alem de 1 e o própio N
     * 
	 * @example 
       (25); // true
	 * @example 
       (11); // false       

*/	
	primo (n){

		if( n < 1){
			return false;
		}

		var i = 2;


		while(i<n){
			if(n % i == 0)
				return false;

			i = i + 1;
		}

		return true;



	}


	/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.
     *
     * @returns {number} Retorna a soma dos dois numeros fibonaccis anteriores
     * 
	 * @example 
       (10); // 55
*/	

	fibonacci(n){

		if(n < 0){
			return false;
		}
		var a = 0;
		var c = 1;

		if(n == 0 || n == 1 ){
			return n;
		}
		var i = 2;

		while(i<=n){

			var t = c;
			c = c + a;
			a = t;
			i = i + 1;
		} 
		return c;

	}




}	
module.exports = Biblioteca;
