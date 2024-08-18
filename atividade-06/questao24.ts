//24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são pares e 
//quantos números são ímpares entre o primeiro e o último número digitado. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.


let num2: number;
let primeiro: number | null = null;
let ultimo: number | null = null;
let pares: number = 0;
let impares: number = 0;

do {
    num2 = parseInt(prompt("Digite um número (0 para parar):") || "0");

    if (num2 !== 0) {
        if (primeiro === null) {
            primeiro = num2;
        }
        ultimo = num2;

        if (num2 % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
} while (num2 !== 0);

console.log(`Números pares: ${pares}`);
console.log(`Números ímpares: ${impares}`);