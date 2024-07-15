// 21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:"Você é casado(a)", "Você é solteiro(a)", etc.).solteiro, casado, separado, divorciado e viúvo
let estadoCivil = prompt(`Qual o seu estado civil:`); //outra forma fazer conversão no prompt "let estadoCivil = prompt(`Qual o seu estado civil:`)?.toLowerCase();"
// toLowerCase() converte strings para minúsculas
//toLowerCase() onverte strings para maiúsculas

if (estadoCivil?.toLowerCase() === "casado" || estadoCivil?.toLowerCase() === "casada"){
    alert(`Você é casado(a)!`);
}else if (estadoCivil?.toLowerCase() === "solteira" || estadoCivil?.toLowerCase() === "solteiro"){
    alert(`Você é solteiro(a)!`);
}else if (estadoCivil?.toLowerCase() === "divorciada" || estadoCivil?.toLowerCase() === "divorciado"){
    alert(`Você é divorciado(a)!`);
}else if (estadoCivil?.toLowerCase() === "viuva" || estadoCivil?.toLowerCase() === "viuvo" || estadoCivil?.toLowerCase() === "viúva" || estadoCivil?.toLowerCase() === "viúvo"){
    alert(`Você é viúvo(a)!`);
}else{
    alert(`Digite seu estado civil`);
}