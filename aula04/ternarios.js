const idade = 19;
// const idade = 13;
// const temCNH = true;
const temCNH = false;
// let numeroDePassageiros = 0;

const podeDirigir = idade > 18 && temCNH;

if (podeDirigir) {
  console.log('Pessoa está habilitada para conduzir veículo');
  //   numeroDePassageiros = 4;
} else {
  console.log('Pessoa não está habilitada para conduzir veículo');
}

const numeroDePassageiros = podeDirigir ? 4 : 0;

console.log({ numeroDePassageiros });
