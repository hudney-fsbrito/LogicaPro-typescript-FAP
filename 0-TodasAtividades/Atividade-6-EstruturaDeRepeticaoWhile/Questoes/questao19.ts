/* 
Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O
programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
*/

let numInt;
let arrNumInt: number[] = [];
let numPorDOIS: number[] = [];
let numPorTRES: number[] = [];
let numPorCINCO: number[] = [];
let i: number = 1;
do {
  if (!isNaN(numInt)) {
    arrNumInt.push(numInt)
    if (numInt % 2 == 0) {
      numPorDOIS.push(numInt)
    }
    if (numInt % 3 == 0) {
      numPorTRES.push(numInt)
    }
    if (numInt % 5 == 0) {
      numPorCINCO.push(numInt)
    }
  } 

  numInt = parseInt(prompt(`Digite ${i}º número inteiro \nPara sair digite [0]`)!)

} while (numInt !== 0);

alert(`
  Números digitados: ${arrNumInt.join(' | ')}
  DIVISÍVEIS POR 2 foram ${numPorDOIS.length} números: ${numPorDOIS.join(' | ')}
  DIVISÍVEIS POR 3 foram ${numPorTRES.length} números: ${numPorTRES.join(' | ')}
  DIVISÍVEIS POR 5 foram ${numPorCINCO.length} números: ${numPorCINCO.join(' | ')}
  `)