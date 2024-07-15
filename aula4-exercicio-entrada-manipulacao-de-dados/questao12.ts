let input4 = prompt("Digite os números separados por espaço:");

if (input4 !== null) {
    let numeros = input4.split(" ");

    // Filtrar apenas os elementos que são números válidos
    let numerosValidos = numeros.filter(numero => !isNaN(Number(numero)));

    alert(`Você digitou ${numerosValidos.length} números válidos.`);
} else {
    alert("Nenhum número foi digitado.");
}
