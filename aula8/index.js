var index = 0;
var arrayNumero;
while (index == 0) {
    var numero = Number(prompt("Digite o número: "));
    arrayNumero.push(numero);
    if (numero === 0) {
        break;
    }
}
console.log(arrayNumero);
