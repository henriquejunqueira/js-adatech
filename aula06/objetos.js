const animal = {
  especie: 'Canis Lupus',
  habitatComum: 'Florestas dos EUA',
  expectativaDeVida: 20,
  // ehTerrestre: true,
  'eh Terrestre': true,
};

// console.log(animal.ehTerrestre);
console.log(animal['eh Terrestre']);
console.log(animal.especie);

animal.populacao = 600_000_000;
// animal.populacao = 6 * 10 ** 9;

console.log(animal.populacao);
