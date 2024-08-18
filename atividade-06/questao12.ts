// 12. Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números digitados. 
// O programa deve parar de ler quando o usuário digitar o número -1 utilizando o while.

let num: number;
let soma: number = 0;
let count: number = 0;

do {
    num = parseInt(prompt("Digite um número (-1 para parar):") || "-1");

    if (num !== -1) {
        soma += num;
        count++;
    }
} while (num !== -1);

const media: number = soma / count;
console.log(`Média dos números digitados: ${media}`);
