// Simulação de Queda Livre
document.getElementById('simularBtn').addEventListener('click', function() {
    const altura = document.getElementById('altura').value;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const g = 9.8; // aceleração da gravidade
    let t = 0;
    let y = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    function desenharBola() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa a tela
        ctx.beginPath();
        ctx.arc(200, y + 50, 20, 0, Math.PI * 2, true); // Desenha a bola
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }

    function atualizarSimulacao() {
        t += 0.05;
        y = 0.5 * g * t * t;

        if (y >= altura * 10) { // Escala de 1:10 para a altura visual no canvas
            y = altura * 10;
            desenharBola();
            return;
        }

        desenharBola();
        requestAnimationFrame(atualizarSimulacao);
    }

    atualizarSimulacao();
});

// Quiz
function verificarResposta(resposta) {
    const resultado = document.getElementById('resultado');
    if (resposta === 9.8) {
        resultado.textContent = "Correto! A aceleração da gravidade é 9,8 m/s².";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Errado. Tente novamente!";
        resultado.style.color = "red";
    }
}
