/* 
Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
números são pares e quantos números são ímpares entre o primeiro e o último número digitado.
O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
*/

let numInt;
let i: number = 0;
let arrNumInt: number[] = [];
let numPAR: number[] = [];
let numIMPAR: number[] = [];

do {
  if (!isNaN(numInt)) {
    arrNumInt.push(numInt);

    if (numInt % 2 == 0) {
      numPAR.push(numInt);
    }
    if (numInt % 2 !== 0) {
      numIMPAR.push(numInt);
    }
  }
  numInt = parseInt(prompt(`Digite o ${i + 1}º número`)!);
} while (numInt != 0);

alert(`
  Números digitados: ${arrNumInt}
  Números pares digitados: ${numPAR.length}
  Números ímpares digitados: ${numIMPAR.length}
  `)