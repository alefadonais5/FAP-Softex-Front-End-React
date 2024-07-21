// 18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
// mensagem informando se é solteiro, casado, divorciado ou viúvo.

const estadoCivil = prompt("Digite o seu estado civil (solteiro, casado, divorciado, viúvo):");

if (estadoCivil !== null) {
    // Converte a entrada para minúsculas para facilitar a comparação
    const estadoCivilLower = estadoCivil.toLowerCase();

    switch (estadoCivilLower) {
        case "solteiro":
            alert("Você é solteiro.");
            break;
        case "casado":
            alert("Você é casado.");
            break;
        case "divorciado":
            alert("Você é divorciado.");
            break;
        case "viúvo":
            alert("Você é viúvo.");
            break;
        default:
            alert("Estado civil inválido. Por favor, insira solteiro, casado, divorciado ou viúvo.");
            break;
    }
} else {
    alert("Por favor, insira seu estado civil.");
}