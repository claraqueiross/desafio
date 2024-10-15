
// ... (mesmo JavaScript do exemplo anterior)
function calcular() {
    const salarioInicial = parseFloat(document.getElementById('salario').value);
    const anos = parseInt(document.getElementById('anos').value);
    const percentual = parseFloat(document.getElementById('percentual').value) / 100;
    const resultado = document.getElementById('resultado');

    if (!salarioInicial) {
        resultado.textContent = 'Por favor, insira o salário inicial.';
        return;
    }

    let salarioAtual = salarioInicial;
    for (let i = 0; i < anos; i++) {
        salarioAtual *= (1 + percentual);
    }

    resultado.textContent = `O salário final será de R$ ${salarioAtual.toFixed(2)}`;
}
