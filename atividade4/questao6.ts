// 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
// de caracteres em seu nome.
const nome1 = prompt("Digite o nome da primeira pessoa: ");
const nome2 = prompt("Digite o nome da segunda pessoa: ");

if (nome1 !== null && nome2 !== null && nome1?.trim() !== " " && nome2?.trim() !== " "){
    const tamanhoNome1 = nome1?.length;
    const tamanhoNome2 = nome2?.length;

    if (tamanhoNome1 > tamanhoNome2){
        alert(`${nome1} tem mais caracteres do que ${nome2}`);
    }else if (tamanhoNome2 > tamanhoNome1){
        alert(`${nome2} tem mais caracteres do que ${nome1}`);
    }else{
        alert(`${nome1} e ${nome2} têm o mesmo número de caracteres.`);
    }
}else{
    alert(`Por favor, insira os nomes corretos.`);
}