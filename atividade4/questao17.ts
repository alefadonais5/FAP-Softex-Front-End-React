// 17. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
// anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).

const idade1 = Number(prompt(`Digite a idade: `));

// Use isNaN para verificar se a idade é um número válido.
// Verifique se idade1 é maior ou igual a 0 para garantir que a idade não seja negativa.
// Number.isInteger verifica se o número é um inteiro para evitar entradas fracionárias.

if (isNaN(idade1) || idade1 < 0 || !Number.isInteger(idade1)){
    alert(`Digite uma idade válida, por favor.`);
}else{
    if(idade1 >= 0 && idade1 <= 1){
        alert(`Bebê`);
    }else if(idade1 > 1 && idade1 <= 12){
        alert(`Criança`);
    }else if(idade1 >=13 && idade1 < 18){
        alert(`Adolescente`);
    }else{
        alert(`Adulto`);
    }
}