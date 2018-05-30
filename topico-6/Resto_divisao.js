/**
 * Calculo para encontrar o resto da Divisao inteira entre dois numeros
 * @class mostrando uma funcao que oferece funcionalidade em uma classe
 *
 * 
 */
export class Resto{

/**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} x 1° argumento: É o dividendo da divisao.
     * @param {number} y 2° argumento: É o divisor da divisao.

     *
     * @returns {number} s O resto da divisão do dividendo pelo divisor.
	 * @example 
       (5,3); // 2.

*/
	Mod(x,y){


		if(y < 0 && x < 0){
			return false
		}

		var s = x

		while(y <= s){

			s = s-y
		}

		return s
	}
}
module.exports = Resto