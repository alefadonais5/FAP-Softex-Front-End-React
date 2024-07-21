// 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
// Domingo, 2 - Segunda-feira, etc.).
// Solicita a entrada do usuário
const numer1 = Number(prompt("Digite um número entre 1 e 7:"));

// Verifica se o número está dentro do intervalo permitido
if (isNaN(numer1) || numer1 < 1 || numer1 > 7) {
    alert("Número inválido! Por favor, digite um número entre 1 e 7.");
} else {
    // Usa switch/case para exibir o dia da semana correspondente
    switch (numer1) {
        case 1:
            alert("Domingo");
            break;
        case 2:
            alert("Segunda-feira");
            break;
        case 3:
            alert("Terça-feira");
            break;
        case 4:
            alert("Quarta-feira");
            break;
        case 5:
            alert("Quinta-feira");
            break;
        case 6:
            alert("Sexta-feira");
            break;
        case 7:
            alert("Sábado");
            break;
    }
}