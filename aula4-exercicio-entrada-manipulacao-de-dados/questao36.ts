// 36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
const pi = 3.14;
let raio = Number(prompt(`Qual o raio da circunferência? `));
let perimetro1 = 2 * pi * raio;

alert(`O perímetro é: ${perimetro1.toFixed(1)}`);