// Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números divisíveis por 3. 
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let num: number;
let soma: number = 0;
let count: number = 0;

do {
    num = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num !== 0 && num % 3 === 0) {
        soma += num;
        count++;
    }
} while (num !== 0);

const media: number = soma / count;
console.log(`Média dos números divisíveis por 3: ${media}`);
