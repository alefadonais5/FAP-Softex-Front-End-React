//16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário

let totalNotas = 0;
for (let i = 0; i < 5; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1}:`) || '0');
    totalNotas += nota;
}
const media = totalNotas / 5;
console.log(`A média das notas é: ${media}`);
