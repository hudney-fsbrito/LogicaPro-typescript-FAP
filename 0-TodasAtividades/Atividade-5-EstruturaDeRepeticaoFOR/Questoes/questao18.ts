/* 
Crie um programa que leia 10 números do usuário 
e exiba o maior e o menor valor digitado.
*/

let numeros: number[] = [];

for (let i = 1; i <= 10; i++) {
  let numero: number = parseFloat(prompt(`Digite ${i}º número `)!);
  if (!isNaN(numero)) {
    numeros.push(numero);
  }
}

if (numeros.length == 10) {
  let numeroMaior: number = numeros[0];
  let numeroMenor: number = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroMaior) {
      numeroMaior = numeros[i];
    }
  }
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < numeroMenor) {
      numeroMenor = numeros[i];
    }
  }
  alert(`
  No array ${numeros} \n 
  O MAIOR número é: ${numeroMaior} \n
  e o número MENOR é: ${numeroMenor}
  `);
  console.log(numeros);
} else {
  alert(`Está faltando número.`);
}
