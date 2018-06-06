import SomaNaturais  from '../Soma_naturais'

const valor = new SomaNaturais()

QUnit.test('Numero = 5', function (assert) {

	// Executa a operação que desejamos testar
	let resultado = valor.funcao(5)

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado, 15, 'Resposta Correta')
})

QUnit.test('Numero = 4', function (assert) {

	// Executa a operação que desejamos testar
	let resultado2 = valor.funcao(4)

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado2, 10, 'Resposta Correta')
})

QUnit.test('Numero = 10', function (assert) {

	// Executa a operação que desejamos testar
	let resultado3 = valor.funcao(10)

	// Verifica se o resultado produzido é o esperado.
	assert.equal(resultado3, 55, 'Resposta Correta')
})