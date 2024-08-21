// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
// pessoa e retorne o índice de massa corporal (IMC) dela.

function imc(peso:number, altura:number){
    return peso/(altura*altura);
};

console.log(`O imc é ${imc(85.5,1.75)}`);