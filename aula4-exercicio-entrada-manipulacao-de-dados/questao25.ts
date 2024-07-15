// 25. Solicite ao usuário um número decimal e converta-o em um número inteiro.
let input: string | null = prompt("Digite um número decimal: ");
if (input !== null) {
    let num1: number = parseFloat(input);
    let numeroConvertido1: number = Math.floor(num1); // converte o número decimal para um inteiro
    alert(`Número convertido ${numeroConvertido1}`);
} else {
    alert("Não pode deixar vazio. Digite um número.");
}