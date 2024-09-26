// 10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
// como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
// faixas de renda:
// a. Até R$ 1.903,98: isento
// b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
// c. De R$ 2.826,66 até R$ 3.751,05: alíquota de 15%
// d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
// e. Acima de R$ 4.664,68: alíquota de 27,5%

function calcularImpostoRenda(wage:number) {
    if(wage <= 1903.98){
        return "Isento";
    }else if(wage <= 2826.65){
        return (wage*7.5)/100;
    }else if(wage <= 3751.05){
        return (wage*15)/100;
    }else if (wage <= 4664.68){
        return (wage*22.5)/100;
    }else{
        return (wage*27.5)/100;
    }
}

console.log(calcularImpostoRenda(5000));
