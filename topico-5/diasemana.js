/**
 * Calculo para encontrar o dia da semana atraves do dia,mês e ano
 * @class mostrando uma funcao que oferece funcionalidade em uma classe
 *
 * 
 */

 export class diaSemana{

 /**
     * Produz o resultado com os argumentos fornecidos.
     *
     * @param {number} d Um dos argumentos(dia).
     * @param {number} m Outro argumento(mes).
     * @param {number} a Ultimo argumento(ano).
     *
     * @returns {number} o dia da semana solicitado. 0 = Segunda-Feira;
     * 1 = Terca-Feira, 2 = Quarta Feira e assim sucessivamente.
	 * @example 
       (8,5,2018); // 1.

     */
operacao(d,m,a){
		if(d < 1 || d > 31){
			return false;
		}

		if(m < 1 || m > 12){
			return false;
		}
		if(a <= 1753){
			return false;
		}

		if(m == 1 || m == 2){

			m = m + 12;
			a = a - 1;
		}


	var s = (d + 2*m + Math.trunc(3*(m+1)/5) + a + Math.trunc(a/4) - Math.trunc(a/100) + Math.trunc(a / 400));	

	return s % 7;
	}
}
//console.log(operacao(9,5,2018));
module.exports = diaSemana;