//5. Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
const nome = prompt("Digite seu nome: ");
alert("Seja bem-vindo " + nome);

//6. Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número inteiro.
const idade = prompt("Digite sua idade: ");
console.log(typeof idade);
const idadeConvertida = Number(idade);
console.log(typeof idadeConvertida);

/*7. Receba um número inteiro do usuário e converta-o em um número decimal (float)
const numero = prompt("Digite o número inteiro: ");
const numeroConvertido = parseFloat(numero);*/

//8. Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const soma = num1 + num2;
alert("A soma é " + soma);

//9. Receba um número decimal do usuário e calcule o seu quadrado.
let numero1 = Number(prompt("Digite o numero decimal: "));
let quadrado = numero1 * numero1;
alert("O quadrado é " + quadrado);

//10. Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
const ano = Number(prompt("Digite o seu ano de nascimento: "));
const idade1 = 2024 - ano;
alert("Você tem " + idade1 + " anos.");

//11. Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida, concatene-os em uma única string e exiba o nome completo.

const nome2 = prompt("Digite seu nome: ");
const sobreNome = String(prompt("Digite seu sobrenome"));
//const nomeCompleto = nome2 + sobreNome;
alert(nome2 + sobreNome);

//12. Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.