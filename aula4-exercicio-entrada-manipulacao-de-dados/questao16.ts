// 16. Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
let numero = Number(prompt("Digite um número inteiro"));

//Number.isInteger(valor) é um método que retorna true se o valor for um número inteiro e false se não for.
if (Number.isInteger(numero)) {
    if (numero % 2 === 0) {
        alert(`O número ${numero} é par`);
    } else {
        alert(`O número ${numero} é ímpar`);
    }
} else {
    alert("Digite um número inteiro válido.");
}