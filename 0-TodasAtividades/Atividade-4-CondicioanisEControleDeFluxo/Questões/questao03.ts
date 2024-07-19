/* Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
iguais. */

let numeroInt1: number = parseInt(prompt("Digite um número inteiro")!);
let numeroInt2: number = parseInt(prompt("Digite um segundo número inteiro")!);

if (!isNaN(numeroInt1) && !isNaN(numeroInt2)) {
  if (numeroInt1 > numeroInt2) {
    alert(`O número ${numeroInt1} é maior que ${numeroInt2}`);
  } else if (numeroInt2 > numeroInt1) {
    alert(`O número ${numeroInt2} é maior que ${numeroInt1}`);
  } else {
    alert(`O número ${numeroInt2} é IGUAL a ${numeroInt1}`);
  }
} else {
  alert("Número inválido!!!");
}
