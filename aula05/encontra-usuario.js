const listaDeContatos = [
  'Paulo',
  'Selina',
  'Roger',
  'Rubens',
  'Zeca',
  'Josué',
  'Natália',
  'Bianca',
];

// let encontrouUsuario = false;
// let atingiuFimDaLista = false;
// let indiceDoUsuario = 0;

// while (!encontrouUsuario && !atingiuFimDaLista) {
//   const usuarioAtual = listaDeContatos[indiceDoUsuario];
//   if (usuarioAtual.startsWith('Z')) {
//     encontrouUsuario = true;
//     console.log(`Usuário encontrado: ${usuarioAtual}`);
//   }
//   indiceDoUsuario++;

//   if (indiceDoUsuario === listaDeContatos.length) {
//     atingiuFimDaLista = true;
//     console.log('Usuário não foi encontrado');
//   }
// }

let indiceDoUsuario = 0;

while (true) {
  const usuarioAtual = listaDeContatos[indiceDoUsuario];
  if (usuarioAtual.startsWith('Z')) {
    console.log(`Usuário encontrado: ${usuarioAtual}`);
    break;
  }
  indiceDoUsuario++;

  if (indiceDoUsuario === listaDeContatos.length) {
    console.log('Usuário não foi encontrado');
    break;
  }
}
