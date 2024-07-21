// 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
// "Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
// switch/case.

const numeroInt = Number(prompt(`Digite sua avaliação de 1 a 5.`));

switch (numeroInt) {
    case 1:
        alert(`Muito insuficiente`);
        break;
    case 2:
        alert(`Insuficiente`);
        break;
    case 3:
        alert(`Regular`);
        break;
    case 4:
        alert(`Bom`);
        break;
    case 5:
        alert(`Muito bom`);
        break;    
        default:
            alert(`Opção inválida!`)
        break;
}