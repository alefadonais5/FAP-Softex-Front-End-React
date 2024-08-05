// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.
const numero = prompt("Digite um número inteiro:") || '0';
let soma = 0;
for (let digito of numero) {
    if (!isNaN(parseInt(digito))) {
        soma += parseInt(digito);
    }
}
console.log(`A soma dos dígitos é: ${soma}`);
