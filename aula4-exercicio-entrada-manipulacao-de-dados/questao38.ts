// 38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.
let note1 = Number(prompt(`Digite a primeira nota do aluno: (exemplo: 9.5)`));
let note2 = Number(prompt(`Digite a segunda nota do aluno: (exemplo: 9.5)`));
let note3 = Number(prompt(`Digite a terceira nota do aluno: (exemplo: 9.5)`));

let average = (note1+note2+note3)/3;

alert(`A média aritmética do aluno é ${average}`);