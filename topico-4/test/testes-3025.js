const funcao = require("../Propriedade3025");

QUnit.test("definição", function(assert) {
    assert.ok(funcao.propriedade3025(3025), "caso usado na definição");
});

QUnit.test("não satisfaz", function(assert) {
    assert.notOk(funcao.propriedade3025(3024), "número que não satisfaz");
});

QUnit.test("satisfaz", function(assert) {
    assert.ok(funcao.propriedade3025(1), "1 * 1 == 1");
});