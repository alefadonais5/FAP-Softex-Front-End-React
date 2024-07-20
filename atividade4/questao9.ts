// 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
// a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
// obesa ou muito obesa.
const pesoInput = prompt(`Digite seu peso: `);
const alturaInput = prompt(`Digite sua altura: `);

if(pesoInput !== null && alturaInput !== null){
    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput);
    if(isNaN(peso) || isNaN(altura)){
        alert(`Peso ou altura inválidos. Por favor, insira valores numéricos.`)         
    }else{
        const imc = peso / (altura * altura); 
        if (imc < 18.5) {
            alert(`Abaixo do peso com IMC: ${imc.toFixed(2)}`);
          } else if (imc >= 18.5 && imc < 24.9) {
            alert(`Peso normal com IMC: ${imc.toFixed(2)}`);
          } else if (imc >= 25 && imc < 29.9) {
            alert(`Sobrepeso com IMC: ${imc.toFixed(2)}`);
          } else if (imc >= 30 && imc < 34.9) {
            alert(`Obeso com IMC: ${imc.toFixed(2)}`);      
          }else{
            alert(`Muito obeso com IMC: ${imc.toFixed(2)}`);
          }
    }
}else{
    alert(`Peso ou altura inválidos. Por favor, insira valores numéricos.`)
}
