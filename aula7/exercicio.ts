type Carro = {
  ano: number;
  marca: string;
};

const corolla: Carro = {
  ano: 2024,
  marca: "Toyota",
};

const gol: Carro = {
  ano: 1999,
  marca: "Volkswagen",
};

const uno: Carro = {
  ano: 2010,
  marca: "Fiat",
};

let carros: Carro[] = [corolla, gol, uno];

// Forma 1
for (let index = 0; index < carros.length; index++) {
  console.log(carros[index].marca);
}

// Forma 2
for (const carro of carros) {
  console.log(carro.marca);
}
