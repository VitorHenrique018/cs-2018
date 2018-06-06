/**
 * Calculo para encontrar a soma de todos os numeros inteiros menores, do numero escolhido ate 1.
 * @class mostrando uma funcao que oferece funcionalidade em uma classe
 *
 * 
 */
export class SomaNaturais{
/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} n Unico Argumento: É um numero inteiro maior que 1.

     *
     * @returns {number} s O Somatorio de n por n-1 ate n = 1.
	 * @example 
       (5); // 15.

*/
	funcao(n){

		if(n<1){
			return false
		}

		var i = 2
		var s = 1
	

		while (i<=n){
			s = s + i
			i = i + 1
		}
		return s

	}
}
module.exports = SomaNaturais
