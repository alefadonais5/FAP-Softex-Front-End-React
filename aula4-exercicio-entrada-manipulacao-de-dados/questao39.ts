// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).

let age = Number(prompt(`Digite sua idade: `));
let months = age * 12;
let days = age * 365;

alert(`Você tem ${months} meses ou ${days} dias de existência`);
