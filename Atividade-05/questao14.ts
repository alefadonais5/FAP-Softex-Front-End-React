//14. Faça um programa que calcule o produto dos números de 1 a 5
let produto: number = 1;

for (let numero: number = 1; numero <= 5; numero++) {
    produto *= numero;
}

console.log(`O produto dos números de 1 a 5 é: ${produto}.`);
