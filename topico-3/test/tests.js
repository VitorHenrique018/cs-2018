(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function OrdenaLetras (palavra) { 
  
    while(palavra.indexOf(" ") != -1)  // usei esse comando para tirar o espaço em branco
    palavra = palavra.replace(" ", "");

    var string = palavra.split(""); // aqui eu separo letra por letra, divide o objeto string em um array com substrings

     var final = string.sort();   //aqui eu ordenei a string em ordem alfabetica ou seja ordena os elementos do array

     return final.join("");     // Junto todos os elementos do array e com "" se a palavra tiver espaco ela irá junta-las
} 

//console.log(OrdenaLetras("vitor henrique antonio da silva")); 

exports.OrdenaLetras = OrdenaLetras;

},{}],2:[function(require,module,exports){
// Obtém referência para o módulo que contém função a ser testada.
// Observe que o presente código de teste está
// em diretório específico (test), enquanto o
// código testado está isolado em outro diretório.

const operacao = require("../App");

// Abaixo segue o nosso primeiro teste
// identificado por "soma trivial".

QUnit.test("Ordenacao Normal", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.OrdenaLetras("vitor");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado,"iortv" ,"Ordenacao Errada");
})
;

QUnit.test("Uma Letra", function (assert) {

  // Executa a operação que desejamos testar
  let resultado2 = operacao.OrdenaLetras("a");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado2,"a" ,"Ordenacao Errada");
})
;
QUnit.test("Ordenacao Normal", function (assert) {

  // Executa a operação que desejamos testar
  let resultado3 = operacao.OrdenaLetras("qwertyuiopasdfghjklzxcvbnm");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado3,"abcdefghijklmnopqrstuvwxyz" ,"Ordenacao Errada");
})
;
},{"../App":1}]},{},[2]);
