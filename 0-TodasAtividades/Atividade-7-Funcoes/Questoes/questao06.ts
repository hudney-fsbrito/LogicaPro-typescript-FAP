/* 
Crie uma função chamada "isPar" 
que receba um número inteiro como parâmetro
e retorne "true" se o número for par ou "false" caso contrário.
*/

alert(`Digite um número inteiro`)
const numPar =  solicitaNumeros(1, 'número')
function isPar(num: number) {
  if (num % 2 == 0) {
    return true
  } else {return false}
}
alert(`O número ${numPar[0]} é par? ${isPar(numPar[0])}`)