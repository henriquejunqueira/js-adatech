// ! For in percorre objetos
// const user = {
//   name: 'JoSÉ mARIa',
//   email: 'JOSE.M1@gmail.com',
//   age: 23,
//   address: 'X Street',
// };

const user = {
  name: 'JoSÉ mARIa SOUZA santos',
  email: 'JOSE.M1@gmail.com',
  age: 23,
  address: 'X Street',
};

// for (const key in user) {
//   console.log(user[key]);
// }

// for (const key in user) {
//   if (key === 'name' || key === 'email') {
//     // user[key] = 'novo valor';
//     user[key] = user[key].toLowerCase();
//   }
// }

// for (const key in user) {
//   let value = user[key];
//   if (key === 'name' || key === 'email') {
//     user[key] = value.toLowerCase();
//   }
// }

// for (const key in user) {
//   let value = user[key];
//   if (key === 'name' || key === 'email') {
//     user[key] = user[key].toLowerCase();
//   }
// }

// for (const key in user) {
//   if (key === 'name') {
//     const names = user[key].split(' ');
//     user[key] = '';

//     for (const name of names) {
//       const normalizedName = name.toLowerCase();
//       const [primeiraLetra, ...restoDoNome] = normalizedName;

//       //   console.log(normalizedName);
//       //   console.log(primeiraLetra);
//       //   console.log(restoDoNome);

//       user[key] =
//         user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('');
//       user[key] = user[key].trim();
//     }
//   }

//   if (key === 'email') {
//     user[key] = user[key].toLowerCase();
//   }
// }

// console.log(user);

// ! MÁ PRÁTICA!
// const numeros = [11, 352, 14125];

// for (const key of user) {
//   console.log(key);
// }

// ! Quando devo usar for...of? Quando for manipular arrays
// ! Quando devo usar for...in? Quando for manipular objetos
