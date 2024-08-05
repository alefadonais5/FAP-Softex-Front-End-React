// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.
const numero2 = prompt("Digite um número inteiro:") || '0';
let somaPares = 0;
for (let digito of numero2) {
    const num = parseInt(digito);
    if (!isNaN(num) && num % 2 === 0) {
        somaPares += num;
    }
}
console.log(`A soma dos dígitos pares é: ${somaPares}`);
