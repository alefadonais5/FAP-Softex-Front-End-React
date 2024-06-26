// DECLARAÇÃO DE VARIÁVEIS
let numero: number = 10;
let texto: string = "Typescript";
let estaChovendo: boolean = false;

console.log(numero);
console.log(texto);
console.log(typeof(estaChovendo));

// DECLARAÇÂO DE OBEJTO
type Pessoa = {
    nome: string,
    idade: number,
    deficienteFisico: boolean,
};

let cadastroMaria: Pessoa = {
    nome: "Maria",
    idade: 30,
    deficienteFisico: false,
};

let cadastroJoao: Pessoa = {
    nome: "João",
    idade: 35,
    deficienteFisico: false,
};

