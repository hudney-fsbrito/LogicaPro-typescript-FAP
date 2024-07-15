//Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
const num1: number = Number(prompt('Digite o primeiro número: '));
const num2: number = Number(prompt('Digite o segundo número: '));

function Soma(num1:number, num2:number) {

  if (!num1 || !num2) {
    alert('Número inválido!!!')
  } else {
    
    let resultado = num1 + num2
    console.log('A soma dos números é: ' + resultado)
    return alert('A soma dos números é: ' + resultado);
  }

}

Soma(num1,num2)
