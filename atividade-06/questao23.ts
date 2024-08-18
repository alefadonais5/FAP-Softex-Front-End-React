// Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor valor digitado que seja positivo e ímpar. 
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let num1: number;
let menorImpar: number | null = null;

do {
    num1 = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num1 > 0 && num1 % 2 !== 0 && (menorImpar === null || num1 < menorImpar)) {
        menorImpar = num1;
    }
} while (num1 !== 0);

console.log(`Menor número positivo e ímpar: ${menorImpar}`);