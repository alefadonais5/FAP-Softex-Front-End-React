// 11. Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o menor valor digitado. 
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let num: number;
let maior: number | null = null;
let menor: number | null = null;

do {
    num = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num !== 0) {
        if (maior === null || num > maior) {
            maior = num;
        }

        if (menor === null || num < menor) {
            menor = num;
        }
    }
} while (num !== 0);

console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);
