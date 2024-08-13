/* 
Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos
números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando
o usuário digitar o número 0 utilizando o while.
*/

let numInt;
let arrNumInt: number[] = [];
let numPar: number[] = [];
let numImpar: number[] = [];
let i: number = 1;
do {
  if (!isNaN(numInt)) {
    arrNumInt.push(numInt)
    if (numInt % 2 == 0) {
      numPar.push(numInt)
    }
    if (numInt % 2 !== 0) {
      numImpar.push(numInt)
    }
  } else{
    alert(`Tente de novo!`)
  }

  numInt = parseInt(prompt(`Digite ${i}º número inteiro \nPara sair digite [0]`)!)

} while (numInt !== 0);

alert(`
  Números digitados: ${arrNumInt}
  Digitados ${numPar.length} PÁRES
  e
  Digitados ${numImpar.length} ÍMPARES
  `)