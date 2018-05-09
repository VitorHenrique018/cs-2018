
import diaSemana  from '../diasemana';

const valor = new diaSemana();

QUnit.test('Dia da Entrega', function (assert) {

  // Executa a operação que desejamos testar
  let resultado = valor.operacao(9,5,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2, 'Resposta Incorreta');
});