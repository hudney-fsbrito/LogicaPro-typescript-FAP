/* Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
presentes nesse número. */

alert(`Digite um número inteiro.`)
const numero = solicitaNumerosInteiro(1,'número')
const numeroArrString = numero[0].toString().split('');;

let digPar: number = 0;
let digImpar: number = 0;
function contarDigitosParesImpares(numArr:string[]) {
  for (const numero of numArr) {
    
    if (parseInt(numero) % 2 == 0 ) {
      digPar++
    }
    if (parseInt(numero) % 2 !== 0 ) {
      digImpar++
    }
  }
}

contarDigitosParesImpares(numeroArrString)

alert(`O número ${numero} contém ${digImpar} números ímpares e ${digPar} pares.`)