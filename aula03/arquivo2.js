const numero1 = 10;
// let numero1;
const numero2 = 30;
const numero3 = 2;
const numero4 = 3;

// const soma = numero1 + numero2; // 20, mas com let numero1 vazio será NaN
// const soma = undefined + numero2; // NaN
// const soma = null + numero2; // 30 porque o null é convertido pra zero (0)
// const soma = 'ab' + numero2; // converte o 30 pra string e concatena ab com 30
// const soma = 'ab' - numero1; // NaN

const soma = numero1 + numero2; // 40
const subtracao = numero1 - numero2; // -20
const multiplicacao = numero1 * numero2; // 300
const divisao = numero1 / numero2; // 0.3333333333333333
const elevado1 = numero3 ** numero4; // 8
const elevado2 = Math.pow(numero3, numero4); // 8
const divisao2 = 3 / 2;
const restoDaDivisao2 = 3 % 2;

const numeroNegativo = -3;
const numeroAbsoluto = Math.abs(numeroNegativo);

console.log({ soma });
console.log({ subtracao });
console.log({ multiplicacao });
console.log({ divisao });
console.log({ elevado1 });
console.log({ elevado2 });
console.log({ divisao2 });
console.log({ restoDaDivisao2 });
console.log({ numeroNegativo });
console.log({ numeroAbsoluto });
