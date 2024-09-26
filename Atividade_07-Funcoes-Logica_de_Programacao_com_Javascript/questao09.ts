// 9- Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
// percentual de desconto como parâmetros e retorne o valor com o desconto aplicado

function calcularDesconto(value:number,percentage: number ) {
    const discount = (value*percentage)/100;
    return value - discount;
    
}

console.log(calcularDesconto(5, 10));