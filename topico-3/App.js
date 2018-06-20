
/**
 * Documentaçao de Ordenar letras em ordem alfabética
 * @param {string} - Parametro obrigatorio

 * @returns {string} - O conteúdo a ser exibido
 * @example 
    exemplo('vitor'); // 'iortv'
*/
function OrdenaLetras (palavra) { 
  
    while(palavra.indexOf(" ") != -1) 
    palavra = palavra.replace(" ", "");

	var string = palavra.split("")

     var final = string.sort();   

     return final.join("");     
} 
//console.log(OrdenaLetras("vitor henrique antonio da silva"));
exports.OrdenaLetras = OrdenaLetras
