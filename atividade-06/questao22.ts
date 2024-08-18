// Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números que estão entre 50 e 100.
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let num: number;
let soma: number = 0;
let count: number = 0;

do {
    num = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num >= 50 && num <= 100) {
        soma += num;
        count++;
    }
} while (num !== 0);

const media: number = soma / count;
console.log(`Média dos números entre 50 e 100: ${media}`);
