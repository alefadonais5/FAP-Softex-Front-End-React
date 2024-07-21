// 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
// exibindo uma mensagem apropriada.

const numeroInput = prompt(`Digite o núemro:`);

if (numeroInput !== null && numeroInput !== ""){
    const numero = parseInt(numeroInput);
    if(!isNaN(numero)){
        if(numero % 3 === 0 && numero % 5 === 0){
            alert(`${numero} é divisível por 3 e por 5.`)
        }else{
            alert(`${numero} não é divisível por 3 e por 5.`)
        }
    }else{
        alert(`Não aceitamos letras, digite um número.`)
    }
}else{
    alert(`Por favor, digite um número.`)
}