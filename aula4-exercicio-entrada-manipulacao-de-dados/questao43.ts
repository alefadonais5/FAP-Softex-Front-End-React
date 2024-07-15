// 43. Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando a fórmula: Fahrenheit = (Celsius * 9/5) + 32.
let celsius = Number(prompt(`Digite a temperatura em celsius: `));
let fahrenheit = (celsius * 9/5) + 32;
alert(`${celsius}°C é igual há ${fahrenheit}°F.`);
