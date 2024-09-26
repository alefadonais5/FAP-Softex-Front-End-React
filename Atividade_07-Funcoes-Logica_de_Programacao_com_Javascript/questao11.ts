// 11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como
// parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais
// próximo.

function calcularMediaArredondada(n1:number, n2:number, n3:number, n4:number) {
    const media = (n1+n2+n3+n4)/4;
    return Math.round(media);
}

console.log(calcularMediaArredondada(5.2,6.5,7.8,8.8));

