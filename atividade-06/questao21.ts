// Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números possuem mais de três dígitos.
//  O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let num: number;
let count: number = 0;

do {
    num = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num !== 0 && Math.abs(num) > 999) {
        count++;
    }
} while (num !== 0);

console.log(`Números com mais de três dígitos: ${count}`);