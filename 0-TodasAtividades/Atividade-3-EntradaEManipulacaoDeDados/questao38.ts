//Questão 38
/*Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média
aritmética desses números.*/

let numDec1: number = parseFloat(prompt('Primeiro número')!)
let numDec2: number = parseFloat(prompt('Segundo número')!)
let numDec3: number = parseFloat(prompt('Terceiro número')!)

function calcMedia(num1:number, num2:number, num3:number) {
  if (!num1 || !num2 || !num3) {
    alert('Digite um número válido!!!')
  } else {
    let result0Media : number = (num1 + num2 + num3) / 3;
    alert(`A média é: ${result0Media.toFixed(2)}`)
  }
}

calcMedia(numDec1,numDec2,numDec3)