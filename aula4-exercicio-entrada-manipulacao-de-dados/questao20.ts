// 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
let name1 = prompt("Digite seu nome:");

if (name1 !== null) {
    let contador = name1.length;

    if (contador > 5) {
        alert(`O nome "${name1}" tem mais que 5 caracteres.`);
    } else if (contador <= 5 && contador !== 0) {
        alert(`O nome "${name1}" tem 5 caracteres ou menos.`);
    } else {
        alert(`Você não digitou nenhum nome.`);
    }
} else {
    alert(`Você cancelou a entrada. Por favor, digite seu nome.`);
}