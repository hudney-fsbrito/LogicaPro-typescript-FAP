/* 
Crie um programa que leia uma sequência 
de números inteiros do usuário 
e exiba o maior e o menor valor digitado. 
O programa deve parar de ler quando o usuário digitar o número 0
utilizando o while.
*/

let numeroInt;
let sequenciaNum: number[] = []
while (numeroInt != 0) {
  if (!isNaN(numeroInt)) {
    sequenciaNum.push(numeroInt)
  } else ('Tente novamente!')
  numeroInt = parseInt(prompt(`
    Digite um número inteiro. 
    Para sair digite [0]
    `)!)
}

let maiorInt: number = sequenciaNum[0]
let menorInt: number = sequenciaNum[0]

if (sequenciaNum.length > 0) {
  /* for (const numeroInt of sequenciaNum) {
    if (numeroInt > maiorInt) {
      maiorInt = numeroInt
    }
    if (numeroInt < menorInt) {
      menorInt = numeroInt
    }
  } */
  maiorInt = Math.max(...sequenciaNum)
  menorInt = Math.min(...sequenciaNum)
  alert(`
    Números digitados: ${sequenciaNum}
    Número maior: ${maiorInt}
    Número menor: ${menorInt}
    `)
  
} else {
  alert("ERRO Tente novamente!")
}