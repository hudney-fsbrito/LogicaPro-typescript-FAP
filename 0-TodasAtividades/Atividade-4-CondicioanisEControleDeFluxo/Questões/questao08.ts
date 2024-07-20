//Faça um programa que receba três números e os imprima em ordem crescente.

let num1: number = parseInt(prompt(`Digite o primeiro número`)!);
let num2: number = parseInt(prompt(`Digite o segundo número`)!);
let num3: number = parseInt(prompt(`Digite o terceiro número`)!);
let numeroLista: number[] = [num1, num2, num3];

  let element: number;
  if (numeroLista[2] < numeroLista[1]) {
    element = numeroLista[2];
    numeroLista[2] = numeroLista[1];
    numeroLista[1] = element;
  }
  if (numeroLista[1] < numeroLista[0]) {
    element = numeroLista[1];
    numeroLista[1] = numeroLista[0];
    numeroLista[0] = element;
  }
  if (numeroLista[2] < numeroLista[0]) {
    element = numeroLista[2];
    numeroLista[2] = numeroLista[0];
    numeroLista[0] = element;
  }
  if (numeroLista[2] < numeroLista[1]) {
    element = numeroLista[2];
    numeroLista[2] = numeroLista[1];
    numeroLista[1] = element;
  }

  alert(numeroLista);

/* numeroLista.sort(comparaNumeros);
function comparaNumeros(a:number,b:number) {
  if (a == b) {return 0};
  if (a < b) {return -1};
  if (a > b) {return 1};
}
numeroLista.sort((a, b) => a - b); */