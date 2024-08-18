// Elabore um programa que leia uma sequência de números inteiros do usuário e determine quantos números pares foram digitados antes do primeiro número ímpar. 
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let num: number;
let pares: number = 0;

do {
    num = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num === 0 || num % 2 !== 0) {
        break;
    }

    pares++;
} while (true);

console.log(`Números pares digitados antes do primeiro ímpar: ${pares}`);
