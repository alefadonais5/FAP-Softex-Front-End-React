// 2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de
// idade.

//Realizar o tratamento de erro com strings ou números

const idade = Number(prompt("Digite a idade da pessoa: "));

if (idade > 18) {
  alert("Maior de idade!");
} else {
  alert("Menor de idade!");
}
