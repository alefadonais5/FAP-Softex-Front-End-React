// 13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo utilizando o while.

let num: number = parseInt(prompt("Digite um número:") || "0");
let soma: number = 0;

while (num > 0) {
    const digito = num % 10;
    soma += Math.pow(digito, 3);
    num = Math.floor(num / 10);
}

console.log(`A soma dos dígitos elevados ao cubo é: ${soma}`);
