(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Calculo para encontrar o dia da semana atraves do dia,mês e ano
 * @class mostrando uma funcao que oferece funcionalidade em uma classe
 *
 * 
 */

var diaSemana = exports.diaSemana = function () {
  function diaSemana() {
    _classCallCheck(this, diaSemana);
  }

  _createClass(diaSemana, [{
    key: "operacao",


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
    value: function operacao(d, m, a) {
      if (d < 1 || d > 31) {
        return false;
      }

      if (m < 1 || m > 12) {
        return false;
      }
      if (a <= 1753) {
        return false;
      }

      if (m == 1 || m == 2) {

        m = m + 12;
        a = a - 1;
      }

      var s = d + 2 * m + Math.trunc(3 * (m + 1) / 5) + a + Math.trunc(a / 4) - Math.trunc(a / 100) + Math.trunc(a / 400);

      return s % 7;
    }
  }]);

  return diaSemana;
}();
//console.log(operacao(9,5,2018));


module.exports = diaSemana;

},{}],2:[function(require,module,exports){
'use strict';

var _diasemana = require('../diasemana');

var _diasemana2 = _interopRequireDefault(_diasemana);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var valor = new _diasemana2.default();

QUnit.test('Dia da Entrega', function (assert) {

  // Executa a operação que desejamos testar
  var resultado = valor.operacao(9, 5, 2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2, 'Resposta Incorreta');
});

},{"../diasemana":1}]},{},[2]);
