// 10. Função calcularImpostoRenda: Crie uma função que receba o salário bruto de uma pessoa como parâmetro e
//  retorne o valor do imposto de renda a ser pago, 
// considerando as seguintes faixas:
// Até R$ 1.903,98: isento
// De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
// De R$ 2.826,66 até R$ 3.751,05: alíquota de 15%
// De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
// Acima de R$ 4.664,68: alíquota de 27,5%

function calcularImpostoRenda(salarioBruto: number): number {
    let imposto: number = 0;

    if (salarioBruto <= 1903.98) {
        imposto = 0;
    } else if (salarioBruto <= 2826.65) {
        imposto = (salarioBruto - 1903.98) * 0.075;
    } else if (salarioBruto <= 3751.05) {
        imposto = (salarioBruto - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    } else if (salarioBruto <= 4664.68) {
        imposto = (salarioBruto - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    } else {
        imposto = (salarioBruto - 4664.68) * 0.275 + (4664.68 - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    }

    return imposto;
}

// Exemplo de uso:
const salario = 5000;
console.log(`O imposto de renda a ser pago é: R$ ${calcularImpostoRenda(salario).toFixed(2)}`);
