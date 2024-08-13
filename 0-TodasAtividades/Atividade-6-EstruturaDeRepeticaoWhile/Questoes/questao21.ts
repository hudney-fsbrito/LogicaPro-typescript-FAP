/* 
Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar o
número 0 utilizando o while.
*/

let numInt;
let arrNumInt: string[] = [];
let numTresDig: string[] = [];
let i: number = 0;
do {
  if (!isNaN(numInt)) {
    arrNumInt.push(numInt.toString());
    if (arrNumInt[i].length >= 3) {
      numTresDig.push(arrNumInt[i]);
    }
    i++
  }

  numInt = parseInt(
    prompt(`Digite um número inteiro \nPara sair digite [0]`)!
  );
} while (numInt !== 0);

alert(`
  Números digitados: ${arrNumInt.join(` | `)}
  Quantidade de úmeros com mais de 3 dígitos: ${numTresDig.length} | ${numTresDig}
  `);