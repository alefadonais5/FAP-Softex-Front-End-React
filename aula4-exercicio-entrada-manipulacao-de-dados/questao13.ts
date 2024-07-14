// 13. Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado.
let nomeAnimal = prompt("Digite o nome de um animal:");

if (nomeAnimal !== null && nomeAnimal.trim() !== "") {
    alert(`Você digitou o animal: ${nomeAnimal}`);
} else {
    alert("Nenhum animal foi digitado.");
}