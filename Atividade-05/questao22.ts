// 22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.
const numero1 = parseInt(prompt("Digite um número inteiro:") || '0');
let divisores: number[] = [];
for (let i = 1; i <= numero1; i++) {
    if (numero1 % i === 0) {
        divisores.push(i);
    }
}
console.log(`Os divisores de ${numero} são: ${divisores.join(', ')}`);
