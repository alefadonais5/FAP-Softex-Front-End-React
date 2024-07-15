// 14. Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo invertido (sobrenome, nome).
let nomeCompleto1 = prompt("Digite se nome completo: ");
let nomeInvertido = nomeCompleto1?.split(" ").reverse().join(" ");
alert(nomeInvertido);
