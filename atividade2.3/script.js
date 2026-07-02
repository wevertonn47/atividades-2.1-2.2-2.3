function iniciarForca() {

    const palavras = [
        "javascript", "programacao", "computador", "internet", "teclado",
        "monitor", "software", "hardware", "algoritmo", "variavel",
        "funcoes", "array", "objeto", "classe", "codigo"
    ];

    const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    const letras = palavraSecreta.split(""); 
    let tabuleiro = Array(letras.length).fill("_"); 
    let tentativas = 6;

    while (tentativas > 0 && tabuleiro.includes("_")) {
        let estado = tabuleiro.join(" ");
        let chute = prompt(
            "Chances restantes: " + tentativas +
            "\nPalavra: " + estado +
            "\nDigite uma letra:"
        );

        if (!chute) {
            alert("Jogo cancelado.");
            return;
        }

        chute = chute.toLowerCase();

        if (chute.length !== 1) {
            alert("Digite apenas uma letra!");
            continue;
        }

        if (letras.includes(chute)) {
            
            for (let i = 0; i < letras.length; i++) {
                if (letras[i] === chute) {
                    tabuleiro[i] = chute;
                }
            }
            alert("Boa! A letra '" + chute + "' está na palavra.");
        } else {
            tentativas--;
            alert("A letra '" + chute + "' não está na palavra.");
        }
    }

    if (!tabuleiro.includes("_")) {
        alert("🎉 Parabéns! Você acertou a palavra: " + palavraSecreta);
    } else {
        alert("😢 Suas tentativas acabaram! A palavra era: " + palavraSecreta);
    }
}
