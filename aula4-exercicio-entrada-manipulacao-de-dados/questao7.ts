let input3 = prompt("Digite um número inteiro:");

if (input3 !== null) {
    let numeroInteiro = parseInt(input3);

    if (!isNaN(numeroInteiro)) {
        let numeroDecimal = Number(numeroInteiro); // Conversão para decimal
        alert(`Número convertido para decimal: ${numeroDecimal}`);
    } else {
        alert("Por favor, digite um número inteiro válido.");
    }
} else {
    alert("Operação cancelada pelo usuário.");
}

