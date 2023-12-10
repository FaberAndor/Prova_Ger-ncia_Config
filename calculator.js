function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('resultado').innerText = 'Resultado: ' + (num1 + num2);
}
