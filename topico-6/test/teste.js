import Resto  from '../Resto_divisao'

const valor = new Resto()

QUnit.test('Divisao 3 Por 8', function (assert) {

	// Executa a operação que desejamos testar
	let resultado = valor.Mod(3,8)

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado, 3, 'Resposta Correta')
})

QUnit.test('Divisao 15 Por 3', function (assert) {

	// Executa a operação que desejamos testar
	let resultado2 = valor.Mod(15,3)

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado2, 0, 'Resposta Correta')
})

QUnit.test('Divisao 4 Por 3', function (assert) {

	// Executa a operação que desejamos testar
	let resultado3 = valor.Mod(4,3)

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado3, 1, 'Resposta Correta')
})
