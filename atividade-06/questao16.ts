// 16. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7) utilizando o while.

let i: number = 0;
let aprovados: number = 0;

while (i < 5) {
    const nota = parseFloat(prompt("Digite a nota do aluno:") || "0");

    if (nota >= 7) {
        aprovados++;
    }
    i++;
}

console.log(`Número de alunos aprovados: ${aprovados}`);
