// let index = 0;
// if (index < 10) {
//   console.log("testando um frase!");
//   index++;
// }

// for (let index = 0; index < 10; index++) {
//   console.log(`testando um frase: ${index}`);
// }

// for (let index = 30; index >= 0; index--) {
//     if (index === 5){
//break;
//     }
//   console.log(`testando um frase: ${index}`);
// }

// for (let index = 0; index < 10; index++) {
//     if (index === 5) {
//       continue;
//     }
//     console.log(`testando um frase: ${index}`);
//   }

const frutas: string[] = ["Banana", "Pêra", "Uva", "Maçã", "Cajá", "Mamão"];
// console.log(frutas[2]);

// for (let index = 0; index < frutas.length; index++) {
//   const element = frutas[index]; // essa variável element funciona apenas dentro do for.
//   console.log(element); //maneira ideal para imprimir os elmentos do array.
// }

for (const fruta of frutas) {
  //for (const element of frutas)
  console.log(fruta);
}

for (const key in frutas) {
  console.log(key);
}
