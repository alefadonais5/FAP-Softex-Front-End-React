//20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7).

let aprovados = 0;
for (let i = 0; i < 5; i++) {
    const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`) || '0');
    if (nota >= 7) {
        aprovados++;
    }
}
console.log(`Número de alunos aprovados: ${aprovados}`);
