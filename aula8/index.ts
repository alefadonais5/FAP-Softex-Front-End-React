//Faça um programa que pede para o usuário digitar vários números até que a tecla 0 seja inserida.
//Feito isso, obtenha o menor e o maior valor entre esses números.
let index = 0;
let arrayNumero: Number[] = [];

while (index !== 0) {
  let numero = Number(prompt("Digite o número: "));
  arrayNumero.push(numero);
  if (numero === 0) {
    break;
  }
}

console.log(arrayNumero);
