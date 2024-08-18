// 15. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o while.

let i: number = 1;

while (i <= 50) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i++;
}
