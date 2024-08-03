/* 
Faça um programa que leia um número inteiro e 
exiba o número invertido. Por exemplo, se o
número lido for 123, o programa deve exibir 321.
*/

let n = parseInt(prompt('Digite um número')!);
let array = n.toString().split("");

if (!isNaN(n)) {
  let element = ' ';
  for (let i = 0; i < array.length; i++) {
    element = array[i] + element;
    // arrayInvert.push(element)
  }
  alert(element);
  console.log(element); 
} else {
  alert('Digite um número válido!')
}

