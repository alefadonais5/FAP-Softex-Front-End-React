// 19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice demassa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
let height = Number(prompt("Digite a altura em metros (por exemplo, 1.75): "));
let weight = Number(prompt("Digite o peso em quilogramas (por exemplo, 70): "));

let imc = weight / (height*height);
alert(`O IMC é ${imc.toFixed(2)}`); //formata o valor do IMC para duas casas decimais.