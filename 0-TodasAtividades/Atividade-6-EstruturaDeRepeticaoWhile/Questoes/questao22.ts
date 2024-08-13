/* 
Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o
número 0 utilizando o while.
*/

let numInt;
let soma: number = 0;
let arrNumINT: number[] = [];
let arrNum50Ate100: number[] = [];
let i: number = 1;
do {
  if (!isNaN(numInt)) {
    arrNumINT.push(numInt)
    if (numInt >= 50 && numInt <= 100) {
      arrNum50Ate100.push(numInt);
      soma += numInt;
    }
  }
  numInt = parseInt(prompt(`Digite o ${i}º número:`)!)
} while (numInt != 0);

alert(`
  Números digitados: ${arrNumINT.join(' | ')}
  Números entre 50 e 100 são: ${arrNum50Ate100.join(' | ')}
  Média dos números de 50 à 100 é: ${soma / arrNum50Ate100.length}
  `)