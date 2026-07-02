function iniciarJogo() {

    const numeroSecreto = Math.floor(Math.random() * 50) + 1;
    let palpite;

    do {
        palpite = parseInt(prompt("Digite um número entre 1 e 50:"));

        if (palpite > numeroSecreto) {
            alert("O número secreto é menor");
        } else if (palpite < numeroSecreto) {
            alert("O número secreto é maior");
        } else if (palpite === numeroSecreto) {
            alert("Você acertou o número secreto!: " + numeroSecreto);
        } else {
            alert("Por favor, digite um número válido");
        }

    } while (palpite !== numeroSecreto);
}
