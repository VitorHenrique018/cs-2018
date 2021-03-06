(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Calculo para encontrar o resto da Divisao inteira entre dois numeros
 * @class mostrando uma funcao que oferece funcionalidade em uma classe
 *
 * 
 */
var Resto = exports.Resto = function () {
  function Resto() {
    _classCallCheck(this, Resto);
  }

  _createClass(Resto, [{
    key: "Mod",


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
    value: function Mod(x, y) {

      if (y < 0 && x < 0) {
        return false;
      }

      var s = x;

      while (y <= s) {

        s = s - y;
      }

      return s;
    }
  }]);

  return Resto;
}();

module.exports = Resto;

},{}],2:[function(require,module,exports){
'use strict';

var _Resto_divisao = require('../Resto_divisao');

var _Resto_divisao2 = _interopRequireDefault(_Resto_divisao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var valor = new _Resto_divisao2.default();

QUnit.test('Divisao 3 Por 8', function (assert) {

	// Executa a operação que desejamos testar
	var resultado = valor.Mod(3, 8);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado, 3, 'Resposta Correta');
});

QUnit.test('Divisao 15 Por 3', function (assert) {

	// Executa a operação que desejamos testar
	var resultado2 = valor.Mod(15, 3);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado2, 0, 'Resposta Correta');
});

QUnit.test('Divisao 4 Por 3', function (assert) {

	// Executa a operação que desejamos testar
	var resultado3 = valor.Mod(4, 3);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado3, 1, 'Resposta Correta');
});

},{"../Resto_divisao":1}]},{},[2]);
