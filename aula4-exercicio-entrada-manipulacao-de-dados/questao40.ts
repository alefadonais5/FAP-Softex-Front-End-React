// 40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.
let reais = Number(prompt(`Digite o valor em reais: `));
let dolar = Number(prompt(`Digite a cotação do dólar:  `));

let valorEmDolares = reais / dolar;

alert(`O valor em dólares é: $${valorEmDolares.toFixed(2)}`);