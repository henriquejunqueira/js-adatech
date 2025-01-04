// const numero = 20;
let numero = 20;
const numero2 = 300;
// const numeroFavorito = 5; // inteiro
const numeroFavorito = 5.5; // real
const estaChovendo = false;

const nome = 'Henrique';

// ! Problema de hoisting
console.log(teste);
var teste = 'Meu Teste';

const qualquerCoisa = null;
console.log(qualquerCoisa);

console.log(numero);
console.log(numero2);

numero = 8;

console.log(numero);

// console.log('Oi', nome, '!');
// console.log(`Oi, ${nome}!`);
console.log(`Oi, ${nome}! Seu número favorito é: ${numeroFavorito}`);

console.log(`Condição do clima é chuvosa? ${estaChovendo}`);
