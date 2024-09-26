// 13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno
// é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e
// retornar a média das notas de todos os alunos.

interface Alunos {
    name: string,
    notes: number
}

function calcularMediaAlunos(alunos: Alunos[]): number {
    if(alunos.length === 0){
        return 0;
    }

    let somaNotas = 0;

    for (const aluno of alunos) {
        somaNotas += aluno.notes; // Soma as notas dos alunos
    }

    return somaNotas / alunos.length; // Calcula a média
}
