/* 
  Elabore um programa que leia um número 
  inteiro e exiba todos os seus divisores.
*/

let numInt = parseInt(prompt("Digite um número ")!);
let arrDiv: number[] = [];
if (!isNaN(numInt)) {
  for (let i = 1; i <= numInt; i++) {
    if (numInt % i == 0) {
      arrDiv.push(i)
    }
  }
  alert(`Os números divisóres de ${numInt} são: ${arrDiv}`);
} else {
  alert("Digite um número válido!");
}