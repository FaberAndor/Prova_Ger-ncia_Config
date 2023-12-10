const { add, subtract, multiply, divide } = require('./calculator.js');

//testando a soma
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

//testando a subtração
test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

//testando a multiplicação
test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

//testando a divisão
test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

//testando se mostra o erro para quem tentar dividir por 0
test('divides 10 / 0 to return error message', () => {
    expect(divide(10, 0)).toBe('Erro: Divisão por zero');
});
