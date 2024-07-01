//Questão 1

let pessoa = {
    nome: "Alef",
    idade: 29,
    endereco: "Rua Eduardo Campos, Guadalajara-Paudaho"
};

//Questão 2
console.log(pessoa.nome);

//Questão 3
(pessoa as any).profissao = "Engenheiro";

//Questão 4
pessoa.idade = 30;

//Questão 5
let animal = {
    nome: "Hazel",
    especie: "Rot",
    cor: "Preto"
};

// Questão 6
let livro = {
    titulo: "Heróis da fé",
    autor: "Orlando Boyer",
    ano: 1985
}

// Questão 7
console.log(livro.autor);

// Questão 8
livro.ano = 1984;

// Questão 9
delete (livro as any).titulo;

//Questão 10
type Carro = {
    marca: string 
    //modelo: string | undefined;
    modelo?: string;
    ano: string;
}
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

console.log(carro); 

// Questão 11 
carro.modelo = undefined;
console.log(carro); 

