// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero

//Realizar o tratamento de erro com strings ou números

const num = Number(prompt("Digite um número: "));

if (num < 0) {
  alert(`${num} número negativo!`);
} else if (num > 0) {
  alert(`${num} número positivo!`);
} else {
  alert(`${num} é igual a zero!`);
}
