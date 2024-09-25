// Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
// percentual de desconto como parâmetros e retorne o valor com o desconto aplicado

function calcularDesconto(value:number,percentage: number ) {
    return (value*percentage)/100;
    
}

console.log(calcularDesconto(5, 10));