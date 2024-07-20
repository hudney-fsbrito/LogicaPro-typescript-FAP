/* Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
de caracteres em seu nome. */

let pessoa1: string = String(prompt("Digite o primeiro nome "));
let pessoa2: string = String(prompt("Digite o segundo nome "));

let pessoa1Length = pessoa1.split(" "); //.join('') Poderia também utilizar esse método nativo.
let pessoa2Length = pessoa2.split(" ");

let element1 = "";
for (let i = 0; i < pessoa1Length.length; i++) {
  let a = pessoa1Length[i];
  element1 = element1 + a;
}
console.log(element1);
/* function concatenaElemnto([]) {
  let element1 = "";
  for (let i = 0; i < pessoa1Length.length; i++) {
    let a = pessoa1Length[i];
    element1 = element1 + a;
  }
  console.log(element1);
  return element1
}
let elemento1 = concatenaElemnto(pessoa1Length) 
let elemento1 = concatenaElemnto(pessoa2Length) 
*/
let element2 = "";
pessoa2Length.forEach((element) => {
  let a = element;
  element2 = element2 + a;
});
console.log(`${element2}`);

if (!pessoa1 || !pessoa2) {
  alert('Digite um nome válido!!!')
  
} else {

  if (element1.length > element2.length) {
    alert(`O nome maior entre os dois é: ${pessoa1} com ${element1.length} caracteres`);
  } else {
    alert(`O nome maior entre os dois é: ${pessoa2} com ${element2.length} caracteres`);
  }
}