// 17. Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
let num = Number(prompt("Digite um número inteiro:"));

if (Number.isInteger(num)){
    if(num > 0){
        alert(`O número ${num} é positivo`);
    }else if (num < 0){
        alert(`O número ${num} é negativo.`);
    }else{
        alert(`O número ${num} é zero`);
    }
}else{
    alert("Esse número não é inteiro. Digite um número inteiro!")
}
