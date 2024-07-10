// const numero = prompt("Digite um número: ");
// //alert(numero === null);
// //alert(numero);

// // !false
// // !undefined
// // !null

// if (numero === null) {
//   alert("Informação INVÁLIDA");
// } else {
//   alert("Informação VÁLIDA");
// }

// const numeroTransformado = parseFloat(numero);

const altura = Number(prompt("Digite a sua altura"));
const peso = Number(prompt("Digite o seu peso: "));

const imc = peso / altura ** 2;

if (imc < 18.5) {
  alert("Abaixo do peso normal");
} else if (imc > 18.5 && imc < 24.9) {
  alert("Peso normal");
} else if (imc >= 24.9) {
  alert("Excesso de peso");
} else {
  alert("Categoria não encontrada");
}
location.reload(); //fica regarregando a página automaticamente
