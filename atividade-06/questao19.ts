
// Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são divisíveis por 2, 
// quantos são divisíveis por 3 e quantos são divisíveis por 5. 
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let num3: number;
let div2: number = 0;
let div3: number = 0;
let div5: number = 0;

do {
    num3 = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num3 !== 0) {
        if (num3 % 2 === 0) {
            div2++;
        }
        if (num3 % 3 === 0) {
            div3++;
        }
        if (num3 % 5 === 0) {
            div5++;
        }
    }
} while (num3 !== 0);

console.log(`Divisíveis por 2: ${div2}`);
console.log(`Divisíveis por 3: ${div3}`);
console.log(`Divisíveis por 5: ${div5}`);
