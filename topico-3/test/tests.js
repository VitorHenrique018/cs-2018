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
},{"../App":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9BcHAuanMiLCJ0ZXN0LUFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBPcmRlbmFMZXRyYXMgKHBhbGF2cmEpIHsgXHJcbiAgXHJcbiAgICB3aGlsZShwYWxhdnJhLmluZGV4T2YoXCIgXCIpICE9IC0xKSAgLy8gdXNlaSBlc3NlIGNvbWFuZG8gcGFyYSB0aXJhciBvIGVzcGHDp28gZW0gYnJhbmNvXHJcbiAgICBwYWxhdnJhID0gcGFsYXZyYS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcclxuXHJcbiAgICB2YXIgc3RyaW5nID0gcGFsYXZyYS5zcGxpdChcIlwiKTsgLy8gYXF1aSBldSBzZXBhcm8gbGV0cmEgcG9yIGxldHJhLCBkaXZpZGUgbyBvYmpldG8gc3RyaW5nIGVtIHVtIGFycmF5IGNvbSBzdWJzdHJpbmdzXHJcblxyXG4gICAgIHZhciBmaW5hbCA9IHN0cmluZy5zb3J0KCk7ICAgLy9hcXVpIGV1IG9yZGVuZWkgYSBzdHJpbmcgZW0gb3JkZW0gYWxmYWJldGljYSBvdSBzZWphIG9yZGVuYSBvcyBlbGVtZW50b3MgZG8gYXJyYXlcclxuXHJcbiAgICAgcmV0dXJuIGZpbmFsLmpvaW4oXCJcIik7ICAgICAvLyBKdW50byB0b2RvcyBvcyBlbGVtZW50b3MgZG8gYXJyYXkgZSBjb20gXCJcIiBzZSBhIHBhbGF2cmEgdGl2ZXIgZXNwYWNvIGVsYSBpcsOhIGp1bnRhLWxhc1xyXG59IFxyXG5cclxuLy9jb25zb2xlLmxvZyhPcmRlbmFMZXRyYXMoXCJ2aXRvciBoZW5yaXF1ZSBhbnRvbmlvIGRhIHNpbHZhXCIpKTsgXHJcblxyXG5leHBvcnRzLk9yZGVuYUxldHJhcyA9IE9yZGVuYUxldHJhcztcclxuIiwiLy8gT2J0w6ltIHJlZmVyw6puY2lhIHBhcmEgbyBtw7NkdWxvIHF1ZSBjb250w6ltIGZ1bsOnw6NvIGEgc2VyIHRlc3RhZGEuXHJcbi8vIE9ic2VydmUgcXVlIG8gcHJlc2VudGUgY8OzZGlnbyBkZSB0ZXN0ZSBlc3TDoVxyXG4vLyBlbSBkaXJldMOzcmlvIGVzcGVjw61maWNvICh0ZXN0KSwgZW5xdWFudG8gb1xyXG4vLyBjw7NkaWdvIHRlc3RhZG8gZXN0w6EgaXNvbGFkbyBlbSBvdXRybyBkaXJldMOzcmlvLlxyXG5cclxuY29uc3Qgb3BlcmFjYW8gPSByZXF1aXJlKFwiLi4vQXBwXCIpO1xyXG5cclxuLy8gQWJhaXhvIHNlZ3VlIG8gbm9zc28gcHJpbWVpcm8gdGVzdGVcclxuLy8gaWRlbnRpZmljYWRvIHBvciBcInNvbWEgdHJpdmlhbFwiLlxyXG5cclxuUVVuaXQudGVzdChcIk9yZGVuYWNhbyBOb3JtYWxcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG5cclxuICAvLyBFeGVjdXRhIGEgb3BlcmHDp8OjbyBxdWUgZGVzZWphbW9zIHRlc3RhclxyXG4gIGxldCByZXN1bHRhZG8gPSBvcGVyYWNhby5PcmRlbmFMZXRyYXMoXCJ2aXRvclwiKTtcclxuXHJcbiAgLy8gVmVyaWZpY2Egc2UgbyByZXN1bHRhZG8gcHJvZHV6aWRvIMOpIG8gZXNwZXJhZG8uXHJcbiAgYXNzZXJ0LmVxdWFsKHJlc3VsdGFkbyxcImlvcnR2XCIgLFwiT3JkZW5hY2FvIEVycmFkYVwiKTtcclxufSlcclxuO1xyXG5cclxuUVVuaXQudGVzdChcIlVtYSBMZXRyYVwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcblxyXG4gIC8vIEV4ZWN1dGEgYSBvcGVyYcOnw6NvIHF1ZSBkZXNlamFtb3MgdGVzdGFyXHJcbiAgbGV0IHJlc3VsdGFkbzIgPSBvcGVyYWNhby5PcmRlbmFMZXRyYXMoXCJhXCIpO1xyXG5cclxuICAvLyBWZXJpZmljYSBzZSBvIHJlc3VsdGFkbyBwcm9kdXppZG8gw6kgbyBlc3BlcmFkby5cclxuICBhc3NlcnQuZXF1YWwocmVzdWx0YWRvMixcImFcIiAsXCJPcmRlbmFjYW8gRXJyYWRhXCIpO1xyXG59KVxyXG47XHJcblFVbml0LnRlc3QoXCJPcmRlbmFjYW8gTm9ybWFsXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuXHJcbiAgLy8gRXhlY3V0YSBhIG9wZXJhw6fDo28gcXVlIGRlc2VqYW1vcyB0ZXN0YXJcclxuICBsZXQgcmVzdWx0YWRvMyA9IG9wZXJhY2FvLk9yZGVuYUxldHJhcyhcInF3ZXJ0eXVpb3Bhc2RmZ2hqa2x6eGN2Ym5tXCIpO1xyXG5cclxuICAvLyBWZXJpZmljYSBzZSBvIHJlc3VsdGFkbyBwcm9kdXppZG8gw6kgbyBlc3BlcmFkby5cclxuICBhc3NlcnQuZXF1YWwocmVzdWx0YWRvMyxcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIgLFwiT3JkZW5hY2FvIEVycmFkYVwiKTtcclxufSlcclxuOyJdfQ==
