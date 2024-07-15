// 34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente(divisão inteira) entre eles.
let numer1 = Number(prompt(`Digite o primeiro número inteiro:`));
let numer2= Number(prompt(`Digite o segundo número inteiro:`));

let soma1 = numer1 + numer2;
let subtracao = numer1 - numer2;
let multiplicacao = numer1 * numer2;
let quociente = Math.floor(numer1 / numer2); // Divisão inteira

alert(`Resultados:\nSoma: ${soma1} \nDiferença: ${subtracao} \nProduto: ${multiplicacao} \nQuociente (divisão inteira): ${quociente}`);