// 26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o novamente para uma string antes de exibi-lo.
let numString: string = prompt("Digite um número inteiro: ") || '';
let numNumber: number = parseInt(numString);
let somaNumber: number = 10 + numNumber;
let somaString: string = somaNumber.toString();


console.log(typeof numString);
console.log(typeof numNumber);
console.log(typeof somaNumber);
console.log(typeof somaString);

console.log("Resultado somado com 10 é igual ", somaString);