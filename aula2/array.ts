// Questão 1
let numeros: number[] = [];

// Questão 2
numeros = [1, 2, 3, 4];

// Questão 3 
console.log(numeros[1]);

// Questão 4
numeros[2] = 10;

// Questão 5
numeros.pop();

// Questão 6
console.log(numeros.length);

// Questão 7
let frutas:string[] = ["Maçã", "Banana", "Laranja"];

// Questão 8
console.log(frutas[0]);

// Questão 9
frutas.push("Uva");

//Questão 10
type Aluno = {
    nome: string;
    idade: number;
};

let aluno: Aluno = {
    nome: "Alef",
    idade: 28
};

let alunos: Aluno [] = [];
alunos.push(aluno);

console.log(aluno);
console.log(alunos);


/*
10. Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas.
Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array.
11. Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos".
12. Adicione mais três objetos do tipo "aluno" ao array "alunos".
13. Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no
terminal apenas os produtos que ficaram em posições pares. */
