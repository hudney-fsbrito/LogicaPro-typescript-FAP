/* 
Elabore um programa que leia uma sequência de números inteiros do usuário e determine
quantos números pares foram digitados antes do primeiro número ímpar. O programa deve parar
de ler quando o usuário digitar o número 0 utilizando o while.
*/

let numInt;
let i: number = 0;
let arrNumInt: number[] = [];
let numPar: number[] = [];
do {
  if (!isNaN(numInt)) {
    arrNumInt.push(numInt);
  }
  numInt = parseInt(
    prompt(`Digite só números intereiros \nPara sair digite [0]`)!
  );
} while (numInt != 0);

while (i < arrNumInt.length) {
  if (arrNumInt[i] % 2 == 0) {
    numPar.push(arrNumInt[i]);
  } else {
    break;
  }
  i++
}
alert(`
  Números digitados: ${arrNumInt}
  Números páres: ${numPar}
  `);
