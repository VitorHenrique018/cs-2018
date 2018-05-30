
import Resto  from '../Resto_divisao';

const valor = new Resto();

QUnit.test('Divisao Qualquer', function (assert) {

  // Executa a operação que desejamos testar
  let resultado = valor.Mod(3,8);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3, 'Resposta Incorreta');
});