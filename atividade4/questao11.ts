// 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
// Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
// 15%.

const salario = Number(prompt(`Digite o salário: `));

if(!isNaN(salario) && salario !== 0 && salario !== null){
    if(salario >= 1500){
        const novoSalario = salario + (salario * 0.10);
        alert(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
    }else{
        const novoSalario = salario + (salario * 0.15);
        alert(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
    }
}else{
    alert(`Por favor, digite um salário válido!`)
}
