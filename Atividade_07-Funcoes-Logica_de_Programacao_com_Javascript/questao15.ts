// 15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
// tabuada desse número de 1 a 10 no console.

function gerarTabuada(numero: number): void {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


gerarTabuada(5);