// 15. Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
let palavra = prompt("Digite uma palavra: ");
let tamanho = palavra?.length;
alert(`A palavra "${palavra}" tem ${tamanho} caracteres`);