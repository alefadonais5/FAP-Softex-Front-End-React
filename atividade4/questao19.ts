// 19. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
// operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).
const nume1 = Number(prompt(`Digite o primeiro número:`));
const nume2 = Number(prompt(`Digite o segundo número: `));
    if(!isNaN(nume1) && !isNaN(nume2)){
    const opcao = Number(prompt(`Qual opção deseja: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão`));
    switch (opcao) {
        case 1:
            const soma = nume1 + nume2;
            alert(`Resultado da Soma é igual ${soma}`);
            break;
        case 2:
            const sub = nume1 - nume2;
            alert(`Resultado da Substração é igual ${sub}`);
            break;
        case 3:
            const mult = nume1 * nume2;
            alert(`Resultado da multiplicação é igual ${mult}`);
            break;
        case 4:
            if(nume2 !== 0){
                const div = nume1 / nume2;
                alert(`Resultado da divisão é igual ${div}`);
                break;
            }else{
                alert(`${nume2} não pode ser divido.`);
                break;
            }
        default:
            alert(`Opção inválida!`)
            break;
    }
}else{
    alert(`Por favor, digite algo.`)
}