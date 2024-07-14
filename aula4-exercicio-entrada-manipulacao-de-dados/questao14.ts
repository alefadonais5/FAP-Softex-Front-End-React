// 14. Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo invertido (sobrenome, nome).
const nomeCompleto1 = prompt("Digite se nome completo: ");
const nomeInvertido = nomeCompleto1?.split(" ").reverse().join(" ");
alert(nomeInvertido);
