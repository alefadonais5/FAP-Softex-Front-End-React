// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
// aluno está aprovado (média maior ou igual a 7) ou reprovado.

let nota1 = Number(prompt("Digite a primeira nota do aluno: "));
let nota2 = Number(prompt("Digite a segunda nota do aluno: "));
let nota3 = Number(prompt("Digite a terceira nota de aluno: "));

let media = (nota1 + nota2 + nota3) / 3

if (media >= 7.0){
    alert(`Aluno aprovado com média ${media}.`);
}else{
    alert(`Aluno reprovado com média ${media}.`);
}