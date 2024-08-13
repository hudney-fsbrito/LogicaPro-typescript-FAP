/* 
Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor
valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o
número 0 utilizando o while.
*/

let numInt;
let i: number = 0;
let arrNumINT: number[] = [];
do {
  if (!isNaN(numInt)) {
    arrNumINT.push(numInt)
  }
  numInt = parseInt(prompt(`Digite o ${i + 1}º número`)!)
  
} while (numInt != 0);

let numSelecionado: number = arrNumINT[0];
while (i < arrNumINT.length) {
  if (arrNumINT[i] <= numSelecionado && (arrNumINT[i] > 0 && arrNumINT[i] % 2 !== 0)) {
    numSelecionado = arrNumINT[i]
  }
  i++
}
alert(`
  Números digitados: ${arrNumINT.join(' | ')}
  Número esperado é: ${numSelecionado}
  `)
