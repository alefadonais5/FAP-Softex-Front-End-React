// 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
// informando se é um dia útil ou um fim de semana.

const dia = prompt("Digite o dia da semana:");

if (dia !== null && dia.trim() !== "") {
    // Remove espaços em branco no início e no final da string e converte para maiúsculas
    const diaConvertido = dia.trim().toUpperCase();
    
    // Verifica se é um dia de fim de semana ou um dia útil
    if (diaConvertido === "DOMINGO" || diaConvertido === "SÁBADO") {
        alert(`${dia} é final de semana.`);
    } else if (diaConvertido === "SEGUNDA-FEIRA" || diaConvertido === "TERÇA-FEIRA" || diaConvertido === "QUARTA-FEIRA" || diaConvertido === "QUINTA-FEIRA" || diaConvertido === "SEXTA-FEIRA") {
        alert(`${dia} é um dia útil.`);
    } else {
        alert("Dia da semana inválido. Por favor, insira um dia válido.");
    }
} else {
    alert("Você não digitou nenhum dia da semana.");
}