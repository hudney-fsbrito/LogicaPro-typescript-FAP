/* Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
"Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
switch/case. */

let numero: number = parseInt(prompt("Digite um número de 1 a 5: \n [1] [2] [3] [4] [5] ")!)

switch (numero) {
  case 5:
    alert('Muito bom')
    break;
  case 4:
    alert('Bom')
    break;
  case 3:
    alert('Regular')
    break;
  case 2:
    alert('Insuficiente')
    break;
  case 1:
    alert('Muito insuficiente')
    break;

  default:
    alert('Digite os valores sugeridos')
    break;
}
