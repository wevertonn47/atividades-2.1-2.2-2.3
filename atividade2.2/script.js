function jogar() {
  
    const opcoes = ["pedra", "papel", "tesoura"];

    let jogador = prompt("Digite sua escolha: pedra, papel ou tesoura");
    if (!jogador) {
        alert("Você cancelou o jogo.");
        return;
    }

    jogador = jogador.toLowerCase();

    if (jogador !== "pedra" && jogador !== "papel" && jogador !== "tesoura") {
        alert("Opção inválida! Escolha apenas pedra, papel ou tesoura.");
        return;
    }

    const numeroAleatorio = Math.floor(Math.random() * 3);
    const computador = opcoes[numeroAleatorio];

    let resultado;
    if (jogador === computador) {
        resultado = "Empate!";
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Você perdeu!";
    }

    alert("Computador escolheu: " + computador + "\n" + resultado);
}
