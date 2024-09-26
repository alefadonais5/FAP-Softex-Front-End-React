// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
// como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
// presentes nesse número.

function contarDigitosParesImpares(numero: number): { pares: number; impares: number } {
    let pares = 0;
    let impares = 0;

    // Converte o número para string e percorre cada dígito
    for (const digito of Math.abs(numero).toString()) {
        // Incrementa contadores com base na paridade do dígito
        (parseInt(digito) % 2 === 0) ? pares++ : impares++;
    }

    return { pares, impares };
}

// Exemplo de uso
const resultado = contarDigitosParesImpares(123456);
console.log(`Pares: ${resultado.pares}, Ímpares: ${resultado.impares}`); // Saída: Pares: 3, Ímpares: 3
