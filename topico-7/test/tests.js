(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Calculo para encontrar a soma de todos os numeros inteiros menores, do numero escolhido ate 1.
 * @class mostrando uma funcao que oferece funcionalidade em uma classe
 *
 * 
 */
var SomaNaturais = exports.SomaNaturais = function () {
	function SomaNaturais() {
		_classCallCheck(this, SomaNaturais);
	}

	_createClass(SomaNaturais, [{
		key: "funcao",

		/**
       * Produz o resultado com os argumentos fornecidos.
       *
       * @param {number} n Unico Argumento: É um numero inteiro maior que 1.
  
       *
       * @returns {number} s O Somatorio de n por n-1 ate n = 1.
  	 * @example 
         (5); // 2.
  
  */
		value: function funcao(n) {

			if (n < 1) {
				return false;
			}

			var i = 2;
			var s = 1;

			while (i <= n) {
				s = s + i;
				i = i + 1;
			}
			return s;
		}
	}]);

	return SomaNaturais;
}();

module.exports = SomaNaturais;

},{}],2:[function(require,module,exports){
'use strict';

var _Soma_naturais = require('../Soma_naturais');

var _Soma_naturais2 = _interopRequireDefault(_Soma_naturais);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var valor = new _Soma_naturais2.default();

QUnit.test('Numero = 5', function (assert) {

	// Executa a operação que desejamos testar
	var resultado = valor.funcao(5);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado, 15, 'Resposta Correta');
});

QUnit.test('Numero = 4', function (assert) {

	// Executa a operação que desejamos testar
	var resultado2 = valor.funcao(4);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado2, 10, 'Resposta Correta');
});

QUnit.test('Numero = 10', function (assert) {

	// Executa a operação que desejamos testar
	var resultado3 = valor.funcao(10);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado3, 55, 'Resposta Correta');
});

},{"../Soma_naturais":1}]},{},[2]);
