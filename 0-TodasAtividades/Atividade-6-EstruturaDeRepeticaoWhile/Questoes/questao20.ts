/* 
Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0
utilizando o while.
*/


let numInt;
let soma: number = 0;
let arrNumInt: number[] = [];
let numPorTRES: number[] = [];
let i: number = 1;
do {
  if (!isNaN(numInt)) {
    arrNumInt.push(numInt)
    if (numInt % 3 == 0) {
      soma += numInt
      numPorTRES.push(numInt)
    }
    
  } 

  numInt = parseInt(prompt(`Digite ${i}º número inteiro \nPara sair digite [0]`)!)

} while (numInt !== 0);

alert(`
  Números digitados: ${arrNumInt.join(` | `)}
  Números divisíveis por 3 são: ${numPorTRES.join(` | `)}
  A média de números por 3 é: ${soma / numPorTRES.length}
  `)