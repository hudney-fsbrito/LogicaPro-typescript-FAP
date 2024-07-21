/* Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão). */

let numero1:number = parseFloat(prompt(`Digite o promeiro numero`)!)
let numero2:number = parseFloat(prompt(`Digite o segundo numero`)!)
let operacao: number = parseInt(prompt(`Digite \n 1 - adição \n 2 - subtração \n 3 - multiplicação \n 4 - divisão`)!)

  
  switch (operacao) {
    case 1:        
        alert(`Resultado: ${numero1} + ${numero2} = ${numero1 + numero2}`)
      break;
    case 2:
        alert(`Resultado: ${numero1} - ${numero2} = ${numero1 - numero2}`)
      break;
    case 3:
        alert(`Resultado: ${numero1} * ${numero2} = ${numero1 * numero2}`)
      break;
    case 4:
        alert(`Resultado: ${numero1} / ${numero2} = ${numero1 / numero2}`)
      break;
  
    default:
      alert("ERRO!!! Digite novamente!!!")
      break;
  }
