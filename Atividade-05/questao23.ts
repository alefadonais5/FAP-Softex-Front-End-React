// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.
let totalAltura = 0;
for (let i = 0; i < 5; i++) {
    const altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} (em metros):`) || '0');
    totalAltura += altura;
}
const mediaAltura = totalAltura / 5;
console.log(`A média de altura é: ${mediaAltura.toFixed(2)} metros`);
