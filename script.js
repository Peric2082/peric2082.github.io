document.getElementById('calcular-btn').addEventListener('click', function() {
    const destino = document.getElementById('destino');
    const valorPago = parseFloat(document.getElementById('valor-pago').value);
    const valorPassagem = parseFloat(destino.value);
    const aviso = document.getElementById('aviso');
    const resultado = document.getElementById('resultado');

    if (isNaN(valorPago) || valorPassagem === 0) {
        aviso.textContent = 'Por favor, selecione uma linha e insira um valor pago válido.';
        resultado.textContent = 'Troco: R$ 0.00';
    } else {
        const troco = valorPago - valorPassagem;
        if (troco < 0) {
            aviso.textContent = 'O valor pago é insuficiente para a passagem.';
            resultado.textContent = 'Troco: R$ 0.00';
        } else {
            aviso.textContent = '';
            resultado.textContent = `Troco: R$ ${troco.toFixed(2)}`;
        }
    }
});

document.getElementById('limpar-btn').addEventListener('click', function() {
    document.getElementById('valor-pago').value = '';
    document.getElementById('resultado').textContent = 'Troco: R$ 0.00';
    document.getElementById('aviso').textContent = '';
});
