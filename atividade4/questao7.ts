// 7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
const letra = prompt("Digite a letra");

if(letra !== null && letra !== "" && letra.length === 1 && /^[a-zA-Z]$/.test(letra)){
    if (letra !== null && "aeiouAEIOU".includes(letra)){
        alert(`${letra} é uma vogal.`);
    }else{
        alert(`${letra} é uma consoante.`);
    } 
}else{
    alert(`Digite uma letra, por favor!`);
}