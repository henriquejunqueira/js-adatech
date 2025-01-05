// ! For of percorre listas
const listaDeNumeros = [33, 131, 155, 555, 222, -21, -56];
const usuarios = ['José', 'Antônia'];

// Código imperativo (para a máquina entender melhor)
// for (let contador = 0; contador < listaDeNumeros.length; contador += 10) {
//   console.log(listaDeNumeros[contador]);
// }

// console.log('\nPrint via While:');
// let indiceDoNumero = 0;
// while (indiceDoNumero < listaDeNumeros.length) {
//   console.log(listaDeNumeros[indiceDoNumero]);
//   indiceDoNumero++;
// }

// Código declarativo
// console.log('Print via For:');
for (let numero of listaDeNumeros) {
  console.log(numero);
}

// for (const usuario of usuarios) {
//   console.log(usuario);
// }
