function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    switch(operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        // Você pode adicionar mais operações aqui conforme necessário
        default:
            result = 'Operação inválida';
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + result;
}
