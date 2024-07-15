// 30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única string, separando-os com um espaço.
let numero2 = Number(prompt(`Digite um número inteiro: `)); 
let texto = prompt(`Digite um texto: `); 
let resultado: String = numero2.toString() + ' ' + texto;
alert(`Resultado da concatenação: ${resultado}`);