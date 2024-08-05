// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
// número lido for 123, o programa deve exibir 321.
const numero3 = prompt("Digite um número inteiro:") || '0';
const numeroInvertido = numero3.split('').reverse().join('');
console.log(`O número invertido é: ${numeroInvertido}`);
