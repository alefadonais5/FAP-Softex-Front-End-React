// 18. Peça ao usuário que insira dois números e exiba o maior deles.
let number1 = Number(prompt("Digite o primeiro número: "));
let number2 = Number(prompt("Digite o segundo número"));

if (number1 > number2){
    alert(`${number1} é o número maior.`)
}else if (number1 < number2){
    alert(`${number2} é o número maior.`)
}else{
    alert (`Os números ${number1} e ${number2} são iguais`);
}