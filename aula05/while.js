const nomesDeUsuarios = ['Joana', 'Henrique', 'Cleber', 'Zeca'];

// console.log('Olá', nomesDeUsuarios[0]);
// console.log('Olá', nomesDeUsuarios[1]);
// console.log('Olá', nomesDeUsuarios[2]);
// console.log('Olá', nomesDeUsuarios[3]);

// let rodouNVezes = 0;
// let vezesQueDeveRodar = 4;

// while (rodouNVezes < vezesQueDeveRodar) {
//   console.log('Olá', nomesDeUsuarios[rodouNVezes]);
//   rodouNVezes++;
// }

let indiceDoUsuario = 0;
let indiceAtual = nomesDeUsuarios.length;

while (indiceDoUsuario < indiceAtual) {
  console.log('Olá', nomesDeUsuarios[indiceDoUsuario]);
  indiceDoUsuario++;
}
