// 4. Faça um programa que verifique se um número é par ou ímpar.

let numero1 = Number(prompt("Digite o número: "));

if (numero1 % 2 == 0){
    alert(`${numero1} número par.`)
}else{
    alert(`${numero1} número ímpar.`)
}