// Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos números pares e quantos números ímpares foram digitados. 
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while

let num4: number;
let pares: number = 0;
let impares: number = 0;

do {
    num4 = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num4 !== 0) {
        if (num4 % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
} while (num4 !== 0);

console.log(`Números pares: ${pares}`);
console.log(`Números ímpares: ${impares}`);
