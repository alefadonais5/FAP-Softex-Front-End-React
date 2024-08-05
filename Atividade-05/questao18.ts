//18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.
let numeros: number[] = [];
for (let i = 0; i < 10; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}:`) || '0');
    numeros.push(numero);
}
const maiorNumero = Math.max(...numeros);
const menorNumero = Math.min(...numeros);
console.log(`O maior número é: ${maiorNumero}`);
console.log(`O menor número é: ${menorNumero}`);
