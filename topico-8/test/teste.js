import Biblioteca  from '../biblioteca';

const valor = new Biblioteca();

QUnit.test('Fatorial Numero = 5', function (assert) {

	// Executa a operação que desejamos testar
	let resultado = valor.fatorial(5);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado, 120, 'Resposta Correta');
});

QUnit.test('Produto Soma Numeros 10 e 4', function (assert) {

	// Executa a operação que desejamos testar
	let resultado2 = valor.Produto_Soma(10,4);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado2, 40, 'Resposta Correta');
});

QUnit.test('Potencia Numeros 5 e 3', function (assert) {

	// Executa a operação que desejamos testar
	let resultado3 = valor.Potencia(5,3);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado3, 125, 'Resposta Correta');
});

QUnit.test('Pi Numero = 3', function (assert) {

	// Executa a operação que desejamos testar
	let resultado4 = valor.Pi(3);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado4, 0.8, 'Resposta Correta');
});

QUnit.test('Logaritmo Natural = 5 e 2', function (assert) {

	// Executa a operação que desejamos testar
	let resultado5 = valor.Logaritmo(5,2);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado5, 18.5, 'Resposta Correta');
});

QUnit.test('Razao Numeros = 2, 12 e 4', function (assert) {

	// Executa a operação que desejamos testar
	let resultado6 = valor.Razao(2,12,4);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado6, 1.65, 'Resposta Correta');
});

QUnit.test('Quadrado = 36', function (assert) {

	// Executa a operação que desejamos testar
	let resultado7 = valor.Quadrado(36);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado7, true, 'Resposta Correta');
});

QUnit.test('Raiz Numeros 81 e 7', function (assert) {

	// Executa a operação que desejamos testar
	let resultado8 = valor.Raiz(81,7);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado8, 9, 'Resposta Correta');
});

QUnit.test('Primo Numero = 25', function (assert) {

	// Executa a operação que desejamos testar
	let resultado9 = valor.primo(11);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado9, true, 'Resposta Correta');
});

QUnit.test('Fibonacci = 10', function (assert) {

	// Executa a operação que desejamos testar
	let resultado10 = valor.fibonacci(10);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado10, 55, 'Resposta Correta');
});

QUnit.test('MDC = 81 e 54', function (assert) {

	// Executa a operação que desejamos testar
	let resultado11 = valor.MDC(81,54);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado11, 27, 'Resposta Correta');
});

QUnit.test('MDC2 = 81 e 54', function (assert) {

	// Executa a operação que desejamos testar
	let resultado12 = valor.MDC2(81,54);

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado12, 27, 'Resposta Correta');
});
