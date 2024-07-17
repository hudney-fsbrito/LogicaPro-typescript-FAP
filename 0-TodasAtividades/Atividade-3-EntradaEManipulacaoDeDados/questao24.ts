//Questão 24 
//Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.

let firstNumber = Number(prompt('Digite um valor com decimal: '))
let secondNumber = Number(prompt('Digite outro valor com decimal: '))

function calcFloat(num1: number, num2:number) {
  let result = num1 % num2
  return result
}

alert(calcFloat(firstNumber, secondNumber))