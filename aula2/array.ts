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

// Questão 11
console.log(alunos[0].nome);

// Questão 12
alunos.push({nome: "Hazel", idade: 8}, {nome: "Chacha", idade: 5}, {nome: "Flash", idade: 1});

// Questão 13
let produtos:string[] = ["Café", "Arroz", "Leite", "Macarrão", "Feijão", "Biscoito", "Creme Dental", "Cebola", "Tomate", "Açucar"]
console.log(produtos[2]);
console.log(produtos[4]);
console.log(produtos[6]);
console.log(produtos[8]);
console.log(produtos[10]);
/*
13. Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no
terminal apenas os produtos que ficaram em posições pares. */
