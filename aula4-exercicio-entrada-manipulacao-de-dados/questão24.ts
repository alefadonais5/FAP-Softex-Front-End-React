// 24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
let input1 = prompt("Digite o primeiro número decimal: ");
let input2 = prompt("Digite o segundo número decimal: ");

    if (input1 !== null && input2 !== null && input1 !== "" && input2 !== ""){
        let nume1 = parseFloat(input1);
        let nume2 = parseFloat(input2);
        alert(`O resto da divisão de ${nume1} e ${nume2} é igual ${nume1 % nume2}`);
    }else{
        alert("Por favor, preencha ambos os campos corretamente.");
    }