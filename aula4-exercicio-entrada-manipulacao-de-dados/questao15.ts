// 15. Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
const palavra = prompt("Digite uma palavra: ");
const tamanho = palavra?.length;
alert(`A palavra "${palavra}" tem ${tamanho} caracteres`);