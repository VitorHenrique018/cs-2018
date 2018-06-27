(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Essa Classe possui um acervo com 16 algoritmos diferentes
 *
*/
var Biblioteca = exports.Biblioteca = function () {
	function Biblioteca() {
		_classCallCheck(this, Biblioteca);
	}

	_createClass(Biblioteca, [{
		key: "fatorial",


		/**
       * Produz o resultado com os argumentos fornecidos.
       *
       * @param {number} n Unico Argumento: É um numero inteiro
       * maior ou igual a 1.
  
       *
       *@returns {number} s Retorna numero n multiplicando por
       * n-1, n-2 ate n = 1.
       * @example
         (5); // 120.
  
  */

		value: function fatorial(n) {

			if (n < 1) {
				return false;
			}

			var i = 2;
			var f = 1;

			while (i <= n) {
				f = f * i;
				i = i + 1;
			}
			return f;
		}

		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} a 1°: É um numero inteiro maior ou igual a 1.
   * @param {number} b 2°: É um numero inteiro maior ou igual a 1.
      *
      * @returns {number} s: Retorna numero b somando-o pela quantidade de vezes do numero a
   
   * @example 
        (10,4); // 40.
  
  */

	}, {
		key: "Produto_Soma",
		value: function Produto_Soma(a, b) {

			if (a < 0 && b < 0) {
				return false;
			}
			var totalParcelas = a;
			var parcela = b;

			if (b < a) {
				totalParcelas = b;
				parcela = a;
			}
			var i = 1;
			var s = 0;

			while (i <= totalParcelas) {
				s = s + parcela;
				i = i + 1;
			}
			return s;
		}

		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} x 1°: É um numero inteiro maior ou igual a 1.
   * @param {number} y 2°: É um numero inteiro maior ou igual a 1.
      *
      * @returns {number} potencia: Retorna a multiplicacao do numero X por ele mesmo por Y vezes
   
   * @example 
        (5,3); // 125.
  
  */

	}, {
		key: "Potencia",
		value: function Potencia(x, y) {

			if (x < 0 || y < 0) {
				return false;
			}
			var potencia = 1;
			var i = 1;

			while (i <= y) {
				potencia = potencia * x;
				i = i + 1;
			}

			return potencia;
		}
		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.
  
      *
      * @returns {number} p Retorna numero n em forma de pi.
   * @example 
        (3); // 0.8
  
  */

	}, {
		key: "Pi",
		value: function Pi(n) {

			if (n < 1) {
				return false;
			}

			var i = 1;
			var s = -1;
			var d = -1;
			var p = 0;

			while (i <= n) {

				d = d + 2;
				s = -1 * s;
				p = (p + 4 * s) / d;
				i = i + 1;
			}

			return p;
		}

		/**
      * O logaritmo natural é uma função que é o expoente de uma potência de e
      *
      * @param {number} n 1°: É um numero inteiro maior ou igual a 1.
   * @param {number} k 2°: É um numero inteiro maior ou igual a 2.
      *
      * @returns {number} e : Retorna a pontecia de n + 1 pela denominador  * i.
   
   * @example 
        (5,2); // 18.5
  
  */

	}, {
		key: "Logaritmo",
		value: function Logaritmo(n, k) {

			if (n < 1 && k < 2) {
				return false;
			}

			var i = 2;
			var e = 1 + n;
			var numerador = n;
			var denominador = 1;

			while (i <= k) {

				numerador = numerador * numerador;
				denominador = denominador * i;
				e = e + numerador / denominador;
				i = i + 1;
			}
			return e;
		}

		/**
      * A razao Aurea é feita pelo segmento mais longo da reta dividida 
      * pelo segmento menor seja igual à reta completa dividida pelo 
      * segmento mais longo.
      *
      * @param {number} x 1°: É um numero inteiro maior ou igual a 1.
   * @param {number} y 2°: É um numero inteiro maior ou igual a x.
   * @param {number} k 2°: É um numero inteiro maior ou igual a 1.
      *
      * @returns {number} c/a : Retorna O maior numero pélo Menor
   
   * @example 
        (2,12,4); // 1.65
  
  */

	}, {
		key: "Razao",
		value: function Razao(x, y, k) {

			if (x < 0 && x > y && k < 0) {
				return false;
			}

			var c = y;
			var a = x;
			var i = 1;

			while (i <= k) {

				var t = c;
				c = c + a;
				a = t;
				i = i + 1;
			}

			return c / a;
		}

		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.
      *
      * @returns {boolean} s==n Retorna se o numero Fornecido (n) é quadrado Perfeito ou nao
      * 
   * @example 
        (36); // true
   * @example 
        (14); // false       
  
  */

	}, {
		key: "Quadrado",
		value: function Quadrado(n) {

			if (n < 1) {
				return false;
			}
			var i = 1;
			var s = 1;

			while (s < n) {
				i = i + 2;
				s = s + i;
			}
			return s == n;
		}
		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} n 1°: É um numero inteiro maior ou igual a 1.
   * @param {number} i 2°: É um numero inteiro.
      *
      * @returns {number} r: Retorna a raiz quadrada de N, e quanto maior o 
      * numero I maior é a precisao da raiz quadrada
      * 
   * @example 
        (81,4); // 9.014272376994608    
      * @example 
        (81,7); // 9. 
  
  */

	}, {
		key: "Raiz",
		value: function Raiz(n, i) {

			if (n < 1) {
				return false;
			}

			var r = 1;

			while (0 <= i) {

				r = (r + n / r) / 2;

				i = i - 1;
			}
			return r;
		}

		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.
      *
      * @returns {boolean} Retorna se o numero Fornecido (n) é Primo ou nao, ou seja,
      * se o numero N é divisivel por outro numero alem de 1 e o própio N
      * 
   * @example 
        (25); // false
   * @example 
        (11); // true       
  
  */

	}, {
		key: "primo",
		value: function primo(n) {

			if (n < 1) {
				return false;
			}

			var i = 2;

			while (i < n) {
				if (n % i == 0) return false;

				i = i + 1;
			}

			return true;
		}

		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} n Unico Argumento: É um numero inteiro maior ou igual a 1.
      *
      * @returns {number} Retorna a soma dos dois numeros fibonaccis anteriores
      * 
   * @example 
        (10); // 55
  */

	}, {
		key: "fibonacci",
		value: function fibonacci(n) {

			if (n < 0) {
				return false;
			}
			var a = 0;
			var c = 1;

			if (n == 0 || n == 1) {
				return n;
			}
			var i = 2;

			while (i <= n) {

				var t = c;
				c = c + a;
				a = t;
				i = i + 1;
			}
			return c;
		}
		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} a 1° Argumento: É um numero inteiro maior ou igual a b.
      * @param {number} b 2° Argumento: É um numero inteiro maior 0.
  
      * @returns {number} Retorna o Maior divisor comun de a e b.
      * 
   * @example 
        (81,54); // 27
  */

	}, {
		key: "MDC",
		value: function MDC(a, b) {

			if (a < b || b < 0) {
				return false;
			}

			while (b != 0) {
				var m = a % b;
				a = b;
				b = m;
			}

			return a;
		}
		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} a 1° Argumento: É um numero inteiro maior ou igual a b.
      * @param {number} b 2° Argumento: É um numero inteiro maior 0.
  
      * @returns {number} Retorna o Maior divisor comun de a e b Utilizando Subtracoes.
      * 
   * @example 
        (81,54); // 27
  */

	}, {
		key: "MDC2",
		value: function MDC2(a, b) {

			if (a < b || b < 0) {
				return false;
			}

			while (a != b) {
				if (a > b) {
					a = a - b;
				} else b = b - a;
			}
			return a;
		}
		/**
      * Produz o resultado com os argumentos fornecidos.
      *
      * @param {number} d Unico Argumento: É um numero inteiro que possui 11 caracteres
  
      * @returns {number} Retorna True ou False de acordo com o numero informado.
      * 
   * @example 
        (42154836124); // false
  */

	}, {
		key: "CPF2",
		value: function CPF2(d) {

			if (d.length != 11) ;
			return false;

			var c = 8;
			var p = parseInt(d[9]);
			var s = parseInt(d[9]);

			while (1 <= c) {
				p = p + d[c];
				s = s + p;
				c = c - 1;
			}

			var j = Mod(Mod(s, 11), 10);
			var k = Mod(Mod(9 * parseInt(d[10]) + (s - p), 11), 10);

			return j == parseInt(d[10]) && k == parseInt(d[11]);
		}
	}]);

	return Biblioteca;
}();

module.exports = Biblioteca;

},{}],2:[function(require,module,exports){
'use strict';

var _biblioteca = require('../biblioteca');

var _biblioteca2 = _interopRequireDefault(_biblioteca);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var valor = new _biblioteca2.default();

QUnit.test('Fatorial Numero = 5', function (assert) {

	// Executa a operação que desejamos testar
	var resultado = valor.fatorial(5);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado, 120, 'Resposta Correta');
});

QUnit.test('Produto Soma Numeros 10 e 4', function (assert) {

	// Executa a operação que desejamos testar
	var resultado2 = valor.Produto_Soma(10, 4);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado2, 40, 'Resposta Correta');
});

QUnit.test('Potencia Numeros 5 e 3', function (assert) {

	// Executa a operação que desejamos testar
	var resultado3 = valor.Potencia(5, 3);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado3, 125, 'Resposta Correta');
});

QUnit.test('Pi Numero = 3', function (assert) {

	// Executa a operação que desejamos testar
	var resultado4 = valor.Pi(3);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado4, 0.8, 'Resposta Correta');
});

QUnit.test('Logaritmo Natural = 5 e 2', function (assert) {

	// Executa a operação que desejamos testar
	var resultado5 = valor.Logaritmo(5, 2);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado5, 18.5, 'Resposta Correta');
});

QUnit.test('Razao Numeros = 2, 12 e 4', function (assert) {

	// Executa a operação que desejamos testar
	var resultado6 = valor.Razao(2, 12, 4);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado6, 1.65, 'Resposta Correta');
});

QUnit.test('Quadrado = 36', function (assert) {

	// Executa a operação que desejamos testar
	var resultado7 = valor.Quadrado(36);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado7, true, 'Resposta Correta');
});

QUnit.test('Raiz Numeros 81 e 7', function (assert) {

	// Executa a operação que desejamos testar
	var resultado8 = valor.Raiz(81, 7);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado8, 9, 'Resposta Correta');
});

QUnit.test('Primo Numero = 25', function (assert) {

	// Executa a operação que desejamos testar
	var resultado9 = valor.primo(11);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado9, true, 'Resposta Correta');
});

QUnit.test('Fibonacci = 10', function (assert) {

	// Executa a operação que desejamos testar
	var resultado10 = valor.fibonacci(10);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado10, 55, 'Resposta Correta');
});

QUnit.test('MDC = 81 e 54', function (assert) {

	// Executa a operação que desejamos testar
	var resultado11 = valor.MDC(81, 54);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado11, 27, 'Resposta Correta');
});

QUnit.test('MDC2 = 81 e 54', function (assert) {

	// Executa a operação que desejamos testar
	var resultado12 = valor.MDC2(81, 54);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado12, 27, 'Resposta Correta');
});

QUnit.test('CPF2 = 42154836124', function (assert) {

	// Executa a operação que desejamos testar
	var resultado13 = valor.CPF2(42154836124);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado13, false, 'Resposta Correta');
});

},{"../biblioteca":1}]},{},[2]);
