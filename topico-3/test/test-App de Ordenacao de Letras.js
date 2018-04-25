// Obtém referência para o módulo que contém função a ser testada.
// Observe que o presente código de teste está
// em diretório específico (test), enquanto o
// código testado está isolado em outro diretório.

const operacao = require("../App de Ordenacao de Letras");

// Abaixo segue o nosso primeiro teste
// identificado por "soma trivial".

QUnit.test("Ordenacao Normal", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.OrdenaLetras('vitor');

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado,'iortv' , "Ordenacao Errada");
});