// 3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
// iguais.
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número"));

if (num1 > num2) {
  alert(`${num1} maior que ${num2}`);
} else if (num1 < num2) {
  alert(`${num1} menor que ${num2}`);
} else {
  alert(`${num1} e ${num2} são iguais!`);
}
