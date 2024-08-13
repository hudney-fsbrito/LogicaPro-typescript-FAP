/* 
Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo
utilizando o while.
*/

let numInt = parseInt(prompt('Digite um número para soma: ')!)
let numSeparado = numInt.toString().split('')
let i: number = 0;
let soma: number = 0;
while (i < numSeparado.length) {
  if (!numInt) {
    alert('Tente de novo!')
    i = numSeparado.length
  } else {
    soma += parseInt(numSeparado[i])
    i++
  }
}
if (numInt) {
  alert(soma);
}
