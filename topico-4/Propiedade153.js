function Propiedade153(cdu){
	/*Se o numero nao atender os requisitos, ou seja, se ele for menor que 0 e maior que 
	9999 irá retornar false.*/

	  if(  cdu < 0 || cdu > 9999)
        return false;

/* O método Math.trunc vai retornar o numero inteiro, excluido os numeros depois da virgula*/

    var c  = Math.trunc(cdu / 100);
    var du = Math.trunc(cdu % 100);
    var d  = Math.trunc(du / 10);
    var u  = Math.trunc(du % 10);

/*A funcao vai retornar true se (c^3+d^3+u^3 for igual ao numero solicitado)*/
    return  c*c*c + d*d*d + u*u*u == cdu;
}

console.log(Propiedade153(153));