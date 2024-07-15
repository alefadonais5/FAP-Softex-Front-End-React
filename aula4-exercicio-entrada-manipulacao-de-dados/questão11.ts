//11. Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida, concatene-os em uma única string e exiba o nome completo.
let nome2 = prompt("Digite seu nome: ");
let sobreNome = String(prompt("Digite seu sobrenome: "));
let nomeCompleto: String = nome2 + " " + sobreNome;
alert(nomeCompleto);