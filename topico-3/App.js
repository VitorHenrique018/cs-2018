function OrdenaLetras (palavra) { 
  
    while(palavra.indexOf(" ") != -1)  // usei esse comando para tirar o espaço em branco
    palavra = palavra.replace(" ", "");

    var string = palavra.split(""); // aqui eu separo letra por letra, divide o objeto string em um array com substrings

     var final = string.sort();   //aqui eu ordenei a string em ordem alfabetica ou seja ordena os elementos do array

     return final.join("");     // Junto todos os elementos do array e com "" se a palavra tiver espaco ela irá junta-las
} 

//console.log(OrdenaLetras("vitor henrique antonio da silva")); 

exports.OrdenaLetras = OrdenaLetras;
