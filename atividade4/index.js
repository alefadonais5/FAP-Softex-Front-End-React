// // 4. Faça um programa que verifique se um número é par ou ímpar.
// let numero1 = Number(prompt("Digite o número: "));
// if (numero1 % 2 == 0){
//     alert(`${numero1} número par.`)
// }else{
//     alert(`${numero1} número ímpar.`)
// }
// // 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
// // aluno está aprovado (média maior ou igual a 7) ou reprovado.
// let nota1 = Number(prompt("Digite a primeira nota do aluno: "));
// let nota2 = Number(prompt("Digite a segunda nota do aluno: "));
// let nota3 = Number(prompt("Digite a terceira nota de aluno: "));
// let media = (nota1 + nota2 + nota3) / 3
// if (media >= 7.0){
//     alert(`Aluno aprovado com média ${media}.`);
// }else{
//     alert(`Aluno reprovado com média ${media}.`);
// }
// // 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
// // de caracteres em seu nome.
// const nome1 = prompt("Digite o nome da primeira pessoa: ");
// const nome2 = prompt("Digite o nome da segunda pessoa: ");
// if (nome1 !== null && nome2 !== null && nome1?.trim() !== " " && nome2?.trim() !== " "){
//     const tamanhoNome1 = nome1?.length;
//     const tamanhoNome2 = nome2?.length;
//     if (tamanhoNome1 > tamanhoNome2){
//         alert(`${nome1} tem mais caracteres do que ${nome2}`);
//     }else if (tamanhoNome2 > tamanhoNome1){
//         alert(`${nome2} tem mais caracteres do que ${nome1}`);
//     }else{
//         alert(`${nome1} e ${nome2} têm o mesmo número de caracteres.`);
//     }
// }else{
//     alert(`Por favor, insira os nomes corretos.`);
// }
// 7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
var letra = prompt("Digite a letra");
if (letra !== null && "aeiouAEIOU".indexOf(letra)) {
    alert("".concat(letra, " \u00E9 uma vogal."));
}
else {
    alert("".concat(letra, " \u00E9 uma consoante."));
}
// 8. Faça um programa que receba três números e os imprima em ordem crescente.
// 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
// a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
// obesa ou muito obesa.
// 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês
// correspondente.
// 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
// Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
// 15%.
// 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
// exibindo uma mensagem apropriada.
// 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
// informando se é um dia útil ou um fim de semana.
// 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
// "Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
// switch/case.
// 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
// Domingo, 2 - Segunda-feira, etc.).
// 16. Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a
// estrutura de controle try/catch para tratar exceções.
// 17. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
// anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).
// 18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
// mensagem informando se é solteiro, casado, divorciado ou viúvo.
// 19. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
// operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).
// 20. Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para
// garantir que a idade digitada seja um valor inteiro válido.
// 21. Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e
// quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.
